import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Validate,
} from 'class-validator';
import { ExistsRule } from '../../helpers/validation/exist.validator';

export class CustomerRegisterDto {
  @IsEmail()
  // @Validate(ExistsRule, ['customers:email'])
  @IsNotEmpty({
    message: 'email cannot be empty',
  })
  email: string;

  @IsNotEmpty({
    message: 'password cannot be empty',
  })
  @Length(6)
  password: string;

  @IsNotEmpty({
    message: 'first_name cannot be empty',
  })
  first_name?: string;

  @IsString()
  last_name?: string;

  @IsString()
  phone?: string;
}