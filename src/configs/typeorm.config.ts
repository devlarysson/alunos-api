import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Aluno } from 'src/aluno/entities/aluno.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  // url: process.env.DATABASE_URL,
  url: 'postgres://postgres:laa0609@localhost:5432/alunos',
  entities: [Aluno],
  synchronize: true,
};
