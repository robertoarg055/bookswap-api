import { ApiProperty } from '@nestjs/swagger'; // Importa ApiProperty
import { IsString, IsNotEmpty } from 'class-validator'; // Agrega IsNotEmpty

export class CreateBookDto {
  @ApiProperty({ description: 'Título del libro', example: 'ARRY POTTER Y LA PIEDRA FILOSOFAL' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Autor del libro', example: 'J. K. ROWLING' })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({ description: 'Descripción del libro', example: 'Harry Potter y la piedra filosofal es el primer volumen de la ya clásica serie de novelas fantásticas de la autora británica J.K. Rowling.' })
  @IsString()
  @IsNotEmpty()
  description: string;
}