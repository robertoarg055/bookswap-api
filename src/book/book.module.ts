import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { Book } from '../book/book.enity/book.entity'; 
import { User } from '../user/user.entity/user.entity'; 
import { AuthModule } from '../auth/auth.module'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Book, User]), 
    AuthModule, 
  ],
  providers: [BookService],
  controllers: [BookController],
  exports: [BookService] 
})
export class BookModule {}