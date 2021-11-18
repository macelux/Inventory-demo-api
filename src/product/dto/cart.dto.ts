import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CartItemValidation {
  @ApiProperty()
  @IsNotEmpty({
    message: 'product_id cannot be empty',
  })
  @IsNumber()
  product_id: number;

  @ApiProperty()
  @IsNotEmpty({
    message: 'quantity cannot be empty',
  })
  @IsNumber()
  quantity: number;
}

export class CartDto {

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty({
    message: 'customer_id cannot be empty',
  })
  customer_id: number;

  @ApiProperty()
  @IsNotEmpty({
    message: 'total cannot be empty',
  })
  @IsNumber()
  total: number;
 
  @ApiProperty({ type: CartItemValidation })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CartItemValidation) // validate each cart item array in request
  cart_items: CartItemValidation[];
}