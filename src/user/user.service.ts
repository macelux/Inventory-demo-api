import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../entities/Customer';
import { CustomerRegisterDto } from './dto/customer.register.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Customer) private customerRepository: Repository<Customer>,
  ) {}

  async createCustomer(_customerRegisterDto: CustomerRegisterDto) {
    const user = await this.customerRepository.create(_customerRegisterDto);
    return this.customerRepository.save(user);
  }

  findAll(): Promise<CustomerRegisterDto[]> {
    return this.customerRepository.find();
  }

  async findCustomerByEmail(email: string) {
    return await this.customerRepository.findOne({
      where: {
        email: email,
      },
    });
  }

  async update(user: any) {
    const findUser = await this.customerRepository.findOne();

    return this.customerRepository.save({
      ...findUser,
      ...user,
    });
  }
}
