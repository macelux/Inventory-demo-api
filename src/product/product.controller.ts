import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('api/v1/products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get('/')
  index(): any {
    return this.productService.findAllProducts();
  }
}
