import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { BookDTO } from 'src/DTO/books.dto';
import { Book } from 'src/mongo/interfaces/book.interface';
import { BooksService } from 'src/services/books/books.service';

@Controller('books')
export class BooksController {

    constructor(
        private readonly booksService: BooksService
    ) { }

    @Get()
    async getAllBooks(): Promise<BookDTO[]> {
        return await this.booksService.getAllBooks();
    }

    @Get(':id')
    async getBook(@Param('id') id: any): Promise<BookDTO> {
        return await this.booksService.getBook(id);
    }

    @Post()
    async saveBook(@Body() newBook: BookDTO): Promise<BookDTO> {
        return await this.booksService.saveBook(newBook);
    }

    @Patch()
    async updateBook(@Body() newBook: Book): Promise<Book> {
        return await this.booksService.updateBook(newBook, newBook._id);
    }

    @Delete(':id')
    async deleteBook(@Param('id') id: any): Promise<Book> {
        return await this.booksService.deleteBook(id);
    }
}
