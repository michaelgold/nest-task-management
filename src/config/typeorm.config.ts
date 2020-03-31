import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'changeme',
    database: 'taskmanagement',
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true
};