import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity/user.entity';
import { Book } from './book/book.enity/book.entity';
import { UserModule } from './user/user.module';
import { PublicModule } from './public/public.module';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'bookswap',
      entities: [User, Book],
      synchronize: true, 
    }),
    UserModule,
    AuthModule,
    BookModule,
    PublicModule,
  ],
})
export class AppModule {}
