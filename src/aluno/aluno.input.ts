import { Field, InputType, Int } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, Length, MaxLength } from "class-validator";

@InputType()
export class AlunoInputDTO {
  @Field(type => Int, { nullable: true })
  id?: number

  @Field()
  @MaxLength(200)
  @IsNotEmpty()
  nome: string

  @Field()
  @MaxLength(200)
  @IsEmail()
  email: string

  @Field()
  @Length(11, 11)
  @IsNotEmpty()
  cpf: string
}