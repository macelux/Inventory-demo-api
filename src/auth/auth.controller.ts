import { Body, Controller, HttpException, Post, Res } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CustomerRegisterDto } from '../user/dto/customer.register.dto';
import { CustomerLoginDto } from '../user/dto/customer.login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('api/v1/auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) { }

  @Post('/login')
  //   @FormDataRequest() //allow request from form data
  async login(@Res() res, @Body() loginDto: CustomerLoginDto) {
    const { email, password } = loginDto;

    try {
      const user = await this.userService.findCustomerByEmail(email);
      console.log(user);

      if (!(await user?.validatePassword(password))) {
        return res.status(401).json({
          message: 'Invalid credentials',
          statusCode: 401,
        });
      }

      const payload = { userId: user.id };

      return res.status(200).json({
        statusCode: 200,
        message: 'login successful',
        token: this.jwtService.sign(payload),
      });
    } catch {
      throw new HttpException('Something went wrong', 500);
    }
  }

  @Post('/register')
  // @FormDataRequest() //allow request from form data
  async create(@Res() res, @Body() user: CustomerRegisterDto) {
    const userExist = await this.userService.findCustomerByEmail(user.email);

    if (userExist?.email !== undefined) {
      return res.status(200).json({
        message: 'customer already exists',
        statusCode: 200,
      });
    } else {
      const newUser = await this.userService.createCustomer(user);

      const data = {
        email: newUser?.email,
        phone: newUser?.phone,
        firstName: newUser?.first_name,
        lastName: newUser?.last_name,
      };

      const payload = { userId: newUser.id };

      return res.status(201).json({
        message: 'registration successful',
        data: data,
        statusCode: 201,
        token: this.jwtService.sign(payload),
      });
    }
  }
}
