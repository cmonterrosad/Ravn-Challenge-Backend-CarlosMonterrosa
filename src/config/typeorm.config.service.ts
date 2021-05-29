import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
      console.log(process.env.HOST);
      console.log(process.env.DB_USERNAME);
      console.log(process.env.DB_DATABASE);
      console.log(process.env.DB_PASSWORD);
    return {
        type: 'mysql',
        host: process.env.HOST, // localhost
        port: 3307,
        username: process.env.DB_USERNAME, // databse login role username
        password: process.env.DB_PASSWORD, // database login role password
        database: process.env.DB_DATABASE, // db name
    
        // entities name should be **.entity.ts
        entities: [__dirname + '/../entities/*{.js,.ts}'],
    
        // We are using migrations, synchronize should be set to false.
        // synchronize: process.env.TYPEORM_SYNCHRONIZE
        //  ? process.env.TYPEORM_SYNCHRONIZE.toLowerCase() === 'true'
        //  : false,
        synchronize: false,
    
        // Run migrations automatically,
        // you can disable this if you prefer running migration manually.
        migrationsRun: false,
    
        logging: false,
        // logger: 'advanced-console',
    
        migrations: [ __dirname + '/../migrations/*{.ts,.js}'],
        cli: {
            // Location of migration should be inside src folder
            // to be compiled into dist/ folder.
            migrationsDir: 'src/migrations'
        },
    };
  }
}