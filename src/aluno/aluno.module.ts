import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlunoResolver } from './aluno.resolver';
import { AlunoRepository } from './repositories/aluno.repository';
import { AlunoService } from './services/aluno.service';

@Module({
  imports: [TypeOrmModule.forFeature([AlunoRepository])],
  providers: [AlunoService, AlunoResolver],
})
export class AlunoModule {}
