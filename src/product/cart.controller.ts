import { Body, Controller, Get, HttpException, Post, Res, UseGuards } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { FormDataRequest } from 'nestjs-form-data';
import { ProductService } from './product.service';
import { CartDto } from './dto/cart.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('carts')
@ApiBearerAuth()
@Controller('api/v1/carts')
export class CartController {
  constructor(private productService: ProductService) { }


  @Post('/')
  @ApiResponse({ status: 201, description: 'item added to cart' })
  @UseGuards(JwtAuthGuard)
  @FormDataRequest()
  async store(@Res() res, @Body() storeCartDto: CartDto) {
    try {
      await this.productService.addToCart(storeCartDto);

      return res.status(201).json({
        statusCode: 201,
        message: 'item added to cart',
        status: true,
      });
    }catch (e) {
      throw new HttpException('There was an error in your request', 400);
    }
  }
}
