import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';

import { BookDTO } from 'src/DTO/books.dto';
import { BooksService } from 'src/services/books/books.service';

@Controller('books')
export class BooksController {

    constructor(
        private readonly booksService: BooksService
    ) { }

    @Get()
    getAllBooks(): string {
        return 'All books';
    }

    @Post()
    async saveBook(@Body() newBook: BookDTO): Promise<BookDTO> {
        return await this.booksService.saveBook(newBook);
    }

    @Patch()
    updateBook(): string {
        return 'Update book';
    }

    @Delete()
    deleteBook(): string {
        return 'Delete book';
    }



}
