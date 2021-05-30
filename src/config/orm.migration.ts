import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'mysql',
    host: process.env.HOST, // localhost
    port: 3307,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_DATABASE,
    entities: [__dirname + '/../entities/*{.js,.ts}'],
    synchronize: false,
    migrationsRun: false,
    migrations: ['src/migrations/*.ts'],
    cli: {
        migrationsDir: 'src/migrations'
    }
};
export = config;