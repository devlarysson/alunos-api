import { EntityRepository, ILike, Repository } from 'typeorm';
import { Aluno } from '../entities/aluno.entity';

@EntityRepository(Aluno)
export class AlunoRepository extends Repository<Aluno> {
  listarTodos(): Promise<Aluno[]> {
    return this.find();
  }

  filtrarBusca(busca: string): Promise<Aluno[]> {
    return this.find({
      where: [
        { nome: ILike(`%${busca}%`) },
        { email: ILike(`%${busca}%`) },
        { cpf: ILike(`%${busca}%`) },
      ],
    });
  }
}
