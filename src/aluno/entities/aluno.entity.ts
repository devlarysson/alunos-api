import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['email', 'cpf'])
@ObjectType()
export class Aluno {
  @PrimaryGeneratedColumn('increment')
  @Field((type) => Int)
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  @Field()
  nome: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  @Field()
  email: string;

  @Column({ nullable: false, type: 'varchar', length: 11 })
  @Field()
  cpf: string;
}
