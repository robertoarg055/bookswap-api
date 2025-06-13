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
   
    return this.bookRepository.find({
      relations: ['owner'], 
      select: { 
        id: true,
        title: true,
        author: true,
        description: true,
        owner: { 
          name: true,
        },
      },
    });
  }
}