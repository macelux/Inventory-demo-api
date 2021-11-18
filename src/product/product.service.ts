import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from '../entities/Cart';
import { CartItem } from '../entities/CartItem';
import { Product } from '../entities/Product';
import { CartDto } from './dto/cart.dto';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(Cart) private cartRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private cartItemRepository: Repository<CartItem>,
  ) { }

  async createProduct(productDto: ProductDto): Promise<ProductDto> {
    const product = this.productRepository.create(productDto);
    return this.productRepository.save(product);
  }

  async findAllProducts(): Promise<ProductDto[]> {
    return this.productRepository.find();
  }

  async updateProducts(product: any, id: number) {
    return await this.productRepository.update({ id: id }, product);
  }

  async deleteProduct(id: number) {
    return await this.productRepository.delete({ id: id });
  }

  async addToCart(cartDto: CartDto) {
    const cart = this.cartRepository.create(cartDto);
    console.log(cart);
    for (const key of Object.keys(cartDto)) {
      console.log(' ia ma here');
    }
    return this.cartRepository.save(cart);
  }
}
