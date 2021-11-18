import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from '../entities/Customer';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
