import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Validate,
} from 'class-validator';
import { ExistsRule } from '../../helpers/validation/exist.validator';
import { ApiProperty } from '@nestjs/swagger';

export class CustomerRegisterDto {
  @ApiProperty()
  @IsEmail()
  // @Validate(ExistsRule, ['customers:email'])
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

  @ApiProperty()
  @IsNotEmpty({
    message: 'first_name cannot be empty',
  })
  first_name?: string;

  @ApiProperty()
  @IsString()
  last_name?: string;

  @ApiProperty()
  @IsString()
  phone?: string;
}