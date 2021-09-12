import { Injectable } from '@nestjs/common';
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
}
