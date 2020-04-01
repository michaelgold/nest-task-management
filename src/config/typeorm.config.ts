import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'changeme',
    database: 'taskmanagement',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true
};