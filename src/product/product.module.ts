import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../entities/Product';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { ProductsController } from './product.controller';
import { ProductService } from './product.service';
import { AdminProductController } from './admin.products.controller';
import { CartController } from './cart.controller';
import { Cart } from '../entities/Cart';
import { CartItem } from '../entities/CartItem';

@Module({
  imports: [
    NestjsFormDataModule,
    TypeOrmModule.forFeature([Product, Cart, CartItem]),
  ],
  controllers: [ProductsController, AdminProductController, CartController],
  providers: [ProductService],
})
export class ProductsModule {}
