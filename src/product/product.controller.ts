import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProductService } from './product.service';

@ApiTags('products')
@ApiBearerAuth()
@Controller('api/v1/products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get('/')
  @UseGuards(JwtAuthGuard)
  index(): any {
    return this.productService.findAllProducts();
  }
}
