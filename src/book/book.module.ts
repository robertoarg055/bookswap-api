import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { Book } from '../book/book.enity/book.entity'; // Importa la entidad Book
import { User } from '../user/user.entity/user.entity'; // Importa la entidad User
import { AuthModule } from '../auth/auth.module'; // Importa AuthModule para usar JwtAuthGuard

@Module({
  imports: [
    TypeOrmModule.forFeature([Book, User]), // Añade User aquí
    AuthModule, // Importa AuthModule para que JwtAuthGuard sea reconocido
  ],
  providers: [BookService],
  controllers: [BookController],
  exports: [BookService] // Podrías exportar BookService si otros módulos lo necesitan
})
export class BookModule {}