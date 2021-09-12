import { Injectable } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { AlunoInputDTO } from '../aluno.input';
import { Aluno } from '../entities/aluno.entity';
import { AlunoRepository } from '../repositories/aluno.repository';

@Injectable()
export class AlunoService {
  constructor(private alunoRepository: AlunoRepository) {}

  buscarTodos(busca?: string): Promise<Aluno[]> {
    let resultado: Promise<Aluno[]>;

    if (busca) {
      resultado = this.alunoRepository.filtrarBusca(busca);
    } else {
      resultado = this.alunoRepository.listarTodos();
    }

    return resultado;
  }

  salvarAluno(inputDTO: AlunoInputDTO): Promise<Aluno> {
    return this.alunoRepository.save(inputDTO)
  }

  buscarPorId(id: number): Promise<Aluno> {
    return this.alunoRepository.findOne(id)
  }

  async removerAluno(id: number): Promise<Aluno> {
    const entidade = await this.buscarPorId(id)
    return this.alunoRepository.remove(entidade)
  }
}
