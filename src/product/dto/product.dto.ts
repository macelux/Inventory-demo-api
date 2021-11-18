import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductDto {

  @IsString({
    message: 'This can only contain text values',
  })
  @IsNotEmpty({
    message: 'This field cannot be empty',
  })
  name: string;

  @IsNotEmpty({
    message: 'This field cannot be empty',
  })
  @IsNumber()
  price: number;

  @IsNotEmpty({
    message: 'This field cannot be empty',
  })

  @IsNumber()
  quantity: number;
}