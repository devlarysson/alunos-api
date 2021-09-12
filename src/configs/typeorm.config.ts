import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Aluno } from 'src/aluno/entities/aluno.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'laa0609',
  database: 'alunos',
  entities: [Aluno],
  synchronize: true,
};
