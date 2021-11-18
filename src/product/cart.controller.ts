import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { FormDataRequest } from 'nestjs-form-data';
import { ProductService } from './product.service';
import { CartDto } from './dto/cart.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/v1/carts')
export class CartController {
  constructor(private productService: ProductService) { }


  @Post('/')
  @UseGuards(JwtAuthGuard)
  @FormDataRequest()
  async store(@Res() res, @Body() storeCartDto: CartDto) {
    await this.productService.addToCart(storeCartDto);

    return res.status(201).json({
      statusCode: 201,
      message: 'item added to cart',
      status: true,
    });
  }
}
