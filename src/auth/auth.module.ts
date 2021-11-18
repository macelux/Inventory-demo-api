import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { JWTStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
import { User } from '../entities/User';
import { Customer } from '../entities/Customer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    forwardRef(() => UserModule),
    TypeOrmModule.forFeature([Customer, User]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '2 days' },
    }),],
  providers: [AuthService, UserService, JWTStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
