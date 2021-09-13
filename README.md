# Alunos API

API feita com [NestJS] para integrar com o [alunos-web] utilizando o [GraphQL]

## Tecnologias utilizadas

- [Node][nodejs]
- [NestJS][nestjs]
- [TypeORM][typeorm]
- [Docker][docker]
- [GraphQL][graphql]
- [PostgreSQL][postgresql]

## Como usar

Para clonar e executar a aplicação, você vai precisar do [Git][git], [Docker][docker] + [docker-compose][docker-compose].

## Instalando API

```bash
# clone este repositório
$ git clone git@github.com:devlarysson/alunos-api.git

# entre no diretório da aplicação
$ cd alunos-api

# construa e inicie seu container
$ docker-compose up --build
```

## Testes

```bash
# testes unitários
$ npm run test
```

[nodejs]: https://nodejs.org/
[nestjs]: https://nestjs.com/
[typeorm]: https://typeorm.io/
[docker]: https://www.docker.com/
[docker-compose]: https://docs.docker.com/compose/
[git]: https://git-scm.com/
[graphql]: https://graphql.org/
[postgresql]: https://www.postgresql.org/