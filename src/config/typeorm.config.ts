export const typeOrmConfig  = () => ({
    database:{
    type: 'mysql',
    host: process.env.HOST,
    port: 3307,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [__dirname + '/../**/*.entity.ts'],
    migrationsTableName: 'custom_migration_table',
    migrations: ['migration/*.js'],
    cli: {
        migrationsDir: 'migration'
    }
    },
});