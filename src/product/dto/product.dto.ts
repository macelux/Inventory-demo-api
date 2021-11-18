import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {

  @ApiProperty()
  @IsString({
    message: 'This can only contain text values',
  })
  @IsNotEmpty({
    message: 'This field cannot be empty',
  })
  name: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'This field cannot be empty',
  })
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNotEmpty({
    message: 'This field cannot be empty',
  })
  @IsNumber()
  quantity: number;
}