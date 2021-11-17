import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/Product';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async createProduct(productDto: ProductDto): Promise<ProductDto> {
    const product = this.productRepository.create(productDto);
    return this.productRepository.save(product);
  }

  async findAllProducts(): Promise<ProductDto[]> {
    return this.productRepository.find();
  }

  async updateProducts(product: any) {
    const findProduct = await this.productRepository.findOne();

    return this.productRepository.save({
      ...findProduct,
      ...product,
    });
  }
}
