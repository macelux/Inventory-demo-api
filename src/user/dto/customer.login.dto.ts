import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CustomerLoginDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty({
    message: 'email cannot be empty',
  })
  email: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'password cannot be empty',
  })
  @Length(6)
  password: string;
}