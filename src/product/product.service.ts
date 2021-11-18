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
    const cartData = {
      customerId: cartDto.customer_id,
      total: cartDto.total,
    };

    for (let i = 0; i < cartDto.cart_items.length; i++) {
      const productId: number = cartDto.cart_items[i]?.product_id;
      const quantity: number = cartDto.cart_items[i]?.quantity;

      const findProduct = await this.productRepository.findOne({
        id: productId,
      });
      findProduct.quantity = findProduct.quantity - quantity;
      await this.productRepository.save(findProduct);
    }
    return this.cartRepository.save(cartData);
  }
}