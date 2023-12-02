import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface Config {
  baseUrl: string;
  port: number;
  database: TypeOrmModuleOptions;
  timezone: string;
}

export const config: Config = {
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: 'mysql',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || 'root',
    database: process.env.DATABASE_NAME || 'nest-boilerplate',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: process.env.DATABASE_SYNCHRONIZE === 'true' || true,
  },
  timezone: process.env.TZ
};
