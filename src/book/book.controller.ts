import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { BookService } from './book.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateBookDto } from '../book/dto/create-book.dto';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateBookDto, @Request() req) {
    return this.bookService.create(dto, req.user.id);
  }
}
