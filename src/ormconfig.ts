import { ConnectionOptions } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const connectionOptions: ConnectionOptions = {
  type: process.env.DB_CONNECTION as any,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: ['warn', 'error'],
  // logging: process.env.DB_LOGGING === 'true' ? true : false,
  entities: [process.env.ENTTITY_PATH],
  migrations: [process.env.MIGRATION_PATH],
  //   subscribers: ['src/subscriber/**/*.ts'],
  migrationsRun: true,
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

// const connectionOptions2: ConnectionOptions = {
//   type: process.env.DB_CONNECTION as any,
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT),
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   synchronize: false,
//   // logging: ['warn', 'error'],
//   logging: process.env.DB_LOGGING === 'true' ? true : false,
//   entities: [process.env.ENTTITY_PATH],
//   migrations: [process.env.MIGRATION_PATH],
//   //   subscribers: ['src/subscriber/**/*.ts'],
//   migrationsRun: true,
//   cli: {
//     migrationsDir: 'src/database/migrations',
//   },
// };

export = connectionOptions;
