import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../book/book.enity/book.entity'; // Asegúrate de que la ruta sea correcta

@Controller('public')
export class PublicController {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}

  @Get('books')
  async findAll() {
    // Retorna todos los libros con su respectivo dueño (solo nombre del usuario)
    return this.bookRepository.find({
      relations: ['owner'], // Carga la relación 'owner'
      select: { // Selecciona solo los campos necesarios del libro
        id: true,
        title: true,
        author: true,
        description: true,
        owner: { // Selecciona solo el nombre del dueño
          name: true,
        },
      },
    });
  }
}