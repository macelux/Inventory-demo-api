import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('api/v1/products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get('/')
  index(): any {
    return this.productService.findAllProducts();
  }
}
