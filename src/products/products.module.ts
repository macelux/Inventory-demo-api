import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../entities/Product';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { AdminProductController } from './admin.products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController, AdminProductController],
  providers: [ProductsService],
})
export class ProductsModule {}
