import { Module } from '@nestjs/common';
import { PublicController } from './public.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../book/book.enity/book.entity'; // Importa la entidad Book

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [PublicController],
  providers: [], // No necesitas servicios aquí si solo vas a usar el repositorio directo
})
export class PublicModule {}