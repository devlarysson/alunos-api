import { Test, TestingModule } from '@nestjs/testing';
import { Aluno } from '../entities/aluno.entity';
import { AlunoRepository } from '../repositories/aluno.repository';
import { AlunoService } from './aluno.service';

describe('AlunoService', () => {
  let service: AlunoService;
  let repository: AlunoRepository;

  const alunos: Aluno[] = [
    {
      id: 1,
      nome: 'Larysson',
      email: 'larysson.alves@gmail.com',
      cpf: '10265487470',
    },
    {
      id: 1,
      nome: 'Descomplica',
      email: 'descomplica@gmail.com',
      cpf: '20148657074',
    },
  ];

  const mockAlunoRepository = {
    listarTodos: () => alunos,
    filtrarBusca: (busca: string) => alunos.filter((aluno) => aluno.nome.includes(busca)),
  };

  const configAlunoRepository = {
    provide: AlunoRepository,
    useValue: {
      listarTodos: () => alunos,
      filtrarBusca: (busca: string) => {
        return alunos.filter((aluno) => aluno.nome.includes(busca));
      },
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlunoService, configAlunoRepository],
    }).compile();

    service = module.get<AlunoService>(AlunoService);
    repository = module.get<AlunoRepository>(AlunoRepository);
  });

  it('deve estar definido os providers', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('deve retornar uma lista com todos os alunos', async () => {
    jest.spyOn(repository, 'listarTodos').mockResolvedValue(mockAlunoRepository.listarTodos());

    const alunos: Aluno[] = await service.buscarTodos();

    expect(alunos).toEqual(alunos);
  });

  it('deve retornar uma lista de alunos filtrado por uma busca', async () => {
    const busca = 'Descomplica';
    const alunosFiltrados = mockAlunoRepository.filtrarBusca(busca);

    jest.spyOn(repository, 'filtrarBusca').mockResolvedValue(alunosFiltrados);

    const alunos: Aluno[] = await service.buscarTodos(busca);

    expect(alunos).toEqual(alunosFiltrados);
  });
});
