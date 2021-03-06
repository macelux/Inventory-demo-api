import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createCartsTable1637159473920 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'carts',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'customer_id',
            type: 'int',
          },
          {
            name: 'total',
            type: 'decimal',
            scale: 2,
            precision: 10,
            default: 0,
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
    await _queryRunner.dropTable('carts');
  }
}
