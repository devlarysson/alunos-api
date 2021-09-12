import { Args, Query, Resolver } from "@nestjs/graphql";
import { Aluno } from "./entities/aluno.entity";
import { AlunoService } from "./services/aluno.service";

@Resolver(of => Aluno)
export class AlunoResolver {
  constructor(private readonly alunoService: AlunoService) {}

  @Query(returns => [Aluno], {name: 'alunos'})
  getAlunos(@Args('busca', { nullable: true }) busca?: string ): Promise<Aluno[]> {
    return this.alunoService.buscarTodos(busca);
  }
}