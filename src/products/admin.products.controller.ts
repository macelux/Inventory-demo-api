import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('api/admin/products')
export class AdminProductController {
  constructor(private productService: ProductsService) {}

  @Get('/')
  index(): any {
    return this.productService.findAllProducts();
  }

  @Post()
  store(): any {
    return '';
  }

  @Put(':id')
  update(): any {
    return '';
  }

  @Delete(':id')
  destroy(): any {
    return '';
  }
}
