import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlunoModule } from './aluno/aluno.module';
import { typeOrmConfig } from './configs/typeorm.config';

@Module({
  imports: [
    AlunoModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
})
export class AppModule {}
