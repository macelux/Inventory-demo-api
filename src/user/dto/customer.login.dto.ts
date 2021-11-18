import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CustomerLoginDto {
  @IsEmail()
  @IsNotEmpty({
    message: 'email cannot be empty',
  })
  email: string;

  @IsNotEmpty({
    message: 'password cannot be empty',
  })
  @Length(6)
  password: string;
}