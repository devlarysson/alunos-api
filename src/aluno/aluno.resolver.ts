import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AlunoInputDTO } from './aluno.input';
import { Aluno } from './entities/aluno.entity';
import { AlunoService } from './services/aluno.service';

@Resolver((of) => Aluno)
export class AlunoResolver {
  constructor(private readonly alunoService: AlunoService) {}

  @Query((returns) => [Aluno], { name: 'alunos' })
  getAlunos(@Args('busca', { nullable: true }) busca?: string): Promise<Aluno[]> {
    return this.alunoService.buscarTodos(busca);
  }

  @Query(returns => Aluno, { name: 'aluno' })
  getAluno(@Args('id', { type: () => Int }) id: number): Promise<Aluno> {
    return this.alunoService.buscarPorId(id)
  }

  @Mutation((returns) => Aluno)
  salvarAluno(@Args('alunoDados') alunoDTO: AlunoInputDTO): Promise<Aluno> {
    return this.alunoService.salvarAluno(alunoDTO)
  }

  @Mutation((returns) => Aluno)
  removerAluno(@Args('id', { type: () => Int }) id: number): Promise<Aluno> {
    return this.alunoService.removerAluno(id)
  }
}
