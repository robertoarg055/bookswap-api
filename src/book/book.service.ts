import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../book/book.enity/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { User } from '../user/user.entity/user.entity'; // Asegúrate de importar User

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    @InjectRepository(User) 
    private userRepository: Repository<User>,
  ) {}

  async create(createBookDto: CreateBookDto, ownerId: number): Promise<Book> {
    const owner = await this.userRepository.findOneBy({ id: ownerId }); 
    if (!owner) {
    
      throw new Error('Owner not found');
    }
    const book = this.bookRepository.create({ ...createBookDto, owner });
    return this.bookRepository.save(book);
  }

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find({ relations: ['owner'] });
  }
}