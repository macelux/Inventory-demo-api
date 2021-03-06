import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createProductsTable1637158292381 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'decimal',
            precision: 10,
            scale: 2,
            default: 0,
          },
          {
            name: 'quantity',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'DATETIME',
            isNullable: true,
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'DATETIME',
            isNullable: true,
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    );
  }

  public async down(_queryRunner: QueryRunner): Promise<void> {
    await _queryRunner.dropTable('products');
  }
}
