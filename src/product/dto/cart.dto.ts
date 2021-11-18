import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';


export class CartItemValidation {
  @IsNotEmpty({
    message: 'product_id cannot be empty',
  })
  @IsNumber()
  product_id: number;

  @IsNotEmpty({
    message: 'quantity cannot be empty',
  })
  @IsNumber()
  quantity: number;
}

export class CartDto {

  @IsNumber()
  @IsNotEmpty({
    message: 'customer_id cannot be empty',
  })
  customer_id: number;

  @IsNotEmpty({
    message: 'total cannot be empty',
  })
  @IsNumber()
  total: number;

  @IsNotEmpty({
    message: 'date_placed cannot be empty',
  })
  date_placed: string;
 

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CartItemValidation) // validate each cart item array in request
  cart_items: CartItemValidation[];
}

