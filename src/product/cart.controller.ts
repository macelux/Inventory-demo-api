import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { FormDataRequest } from 'nestjs-form-data';
import { ProductService } from './product.service';
import { CartDto } from './dto/cart.dto';

@Controller('api/v1/carts')
export class CartController {
  constructor(private productService: ProductService) { }


  @Post('/')
  @FormDataRequest()
  async store(@Res() res, @Body() storeCartDto: CartDto) {
    console.log(storeCartDto);
    // const newProduct = await this.productService.addToCart(storeCartDto);

    return res.status(201).json({
      // data: newProduct,
      statusCode: 201,
      message: 'product created',
      status: true,
    });
  }
}
