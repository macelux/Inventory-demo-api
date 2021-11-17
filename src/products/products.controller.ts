import { Controller, Get } from '@nestjs/common';
import { Product } from '../entities/Product';
import { ProductsService } from './products.service';

@Controller('api/products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get('/')
  index(): any {
    return this.productService.findAllProducts();
  }
}
