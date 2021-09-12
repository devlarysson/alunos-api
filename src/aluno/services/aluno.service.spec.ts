import { Test, TestingModule } from '@nestjs/testing';
import { Aluno } from '../entities/aluno.entity';
import { AlunoRepository } from '../repositories/aluno.repository';
import { AlunoService } from './aluno.service';

describe('AlunoService', () => {
  let service: AlunoService;
  let repository: AlunoRepository;

  const alunoArrMock: Aluno[] = [
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
    listarTodos: () => {},
    filtrarBusca: (busca: string) => {},
  };

  const configAlunoRepository = {
    provide: AlunoRepository,
    useValue: mockAlunoRepository,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlunoService, AlunoRepository, configAlunoRepository],
    }).compile();

    service = module.get<AlunoService>(AlunoService);
    repository = module.get<AlunoRepository>(AlunoRepository);
  });

  it('should service to be defined', () => {
    expect(service).toBeDefined();
  });

  it('should repository to be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should return all Aluno array', async () => {
    jest.spyOn(repository, 'listarTodos').mockResolvedValue(alunoArrMock);

    const alunos: Aluno[] = await service.buscarTodos();

    expect(alunos).toEqual(alunoArrMock);
  });

  it('should return only one element of Aluno array', async () => {
    const busca = 'Descomplica'
    const alunoArrMockFiltrado: Aluno[] = alunoArrMock.filter(aluno => aluno.nome.includes(busca))

    jest.spyOn(repository, 'filtrarBusca').mockResolvedValue(alunoArrMockFiltrado);

    const alunos: Aluno[] = await service.buscarTodos(busca);

    expect(alunos).toEqual(alunoArrMockFiltrado);
  });
});
