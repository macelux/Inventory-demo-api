import { BadRequestException, Injectable } from "@nestjs/common";
import { Connection, getConnection } from 'typeorm';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'ExistsRule', async: true })
@Injectable()
export class ExistsRule implements ValidatorConstraintInterface {
  constructor(private connection: Connection) { }

  async validate(value: number | string, args: ValidationArguments) {
    const { constraints } = args;
    if (constraints.length === 0) {
      throw new BadRequestException(`Failed validating ${value} exists.`);
    }

    const str = constraints[0].split(':');
    const tableName = str[0];
    const columnName = str[1];

    const result = await getConnection().query(
      `select count(*) from ${tableName} where ${columnName}=$1`,
      [value],
    );

    // The record already exists. Failing the validation.
    if (result[0].count > 0) {
      return false;
    }

    return true;
  }

  defaultMessage?(args?: ValidationArguments): string {
    const { property, value } = args;

    return `${property} ${value} is already taken.`;
  }
}