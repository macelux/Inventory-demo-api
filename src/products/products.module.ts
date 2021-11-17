import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../entities/Product';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { AdminProductController } from './admin.products.controller';

@Module({
  imports: [NestjsFormDataModule, TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController, AdminProductController],
  providers: [ProductsService],
})
export class ProductsModule {}
