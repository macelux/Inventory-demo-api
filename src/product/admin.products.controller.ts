import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
import { FormDataRequest } from 'nestjs-form-data';
import { ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('admin products')
@Controller('api/v1/admin/products')
export class AdminProductController {
  constructor(private productService: ProductService) { }

  @Get('/')
  @ApiResponse({ status: 200, description: 'product fetched' })
  async index(@Res() res) {
    return res.status(200).json({
      data: await this.productService.findAllProducts(),
      statusCode: 200,
      message: 'products fetched',
      status: true,
    });
  }

  @Post()
  @ApiResponse({ status: 201, description: 'product created' })
  @FormDataRequest()
  async store(@Res() res, @Body() storeProductDto: ProductDto) {
    const newProduct = await this.productService.createProduct(storeProductDto);

    return res.status(201).json({
      data: newProduct,
      statusCode: 201,
      message: 'product created',
      status: true,
    });
  }

  @Put('/:id')
  @ApiResponse({ status: 200, description: 'product updated' })
  async update(
    @Param('id') id: number,
    @Res() res,
    @Body() updateProductDto: ProductDto,
  ) {
    const validatedRequest = {
      name: updateProductDto.name,
      price: updateProductDto.price,
      quantity: updateProductDto.quantity,
    };

    const isUpdated = await this.productService.updateProducts(
      validatedRequest,
      id,
    );

    if (isUpdated) {
      return res.status(200).json({
        data: {},
        statusCode: 200,
        message: 'product updated',
        status: true,
      });
    } else {
      throw new HttpException(
        'Product was not updated',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete('/:id')
  @ApiResponse({ status: 200, description: 'product deleted' })
  async destroy(@Param('id') id: number, @Res() res) {
    const isDeleted = await this.productService.deleteProduct(id);

    console.log(isDeleted);
    if (isDeleted) {
      return res.status(200).json({
        data: {},
        statusCode: 200,
        message: 'product deleted',
        status: true,
      });
    } else {
      throw new HttpException(
        'product could not be deleted',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
