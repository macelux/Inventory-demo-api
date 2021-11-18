import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUsersTable1637159449645 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'first_name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'last_name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'role',
            type: 'varchar',
          },
          {
            name: 'status',
            type: 'tinyint',
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
    await _queryRunner.dropTable('users');
  }
}
