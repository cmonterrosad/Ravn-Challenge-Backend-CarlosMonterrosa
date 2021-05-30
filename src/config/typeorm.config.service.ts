import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    console.log(parseInt(process.env.DB_PORT));
    return {
        type: 'mysql',
        host: process.env.HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME, 
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [__dirname + '/../entities/*{.js,.ts}'],
        synchronize: false,
        migrationsRun: false,
        migrations: [ __dirname + '/../migrations/*{.ts,.js}'],
        cli: {
            migrationsDir: 'src/migrations'
        },
    };
  }
}