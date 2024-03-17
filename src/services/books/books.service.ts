import { Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { Book } from 'src/mongo/interfaces/book.interface';
import { BookRepository } from 'src/mongo/repository/book.repository';

@Injectable()
export class BooksService {

    constructor(
        private readonly bookRepository: BookRepository
    ) {}

    async saveBook(newBook: BookDTO): Promise<BookDTO> {
        return await this.bookRepository.saveBook(newBook);
    }

    async getBook(id: any): Promise<BookDTO> {
        return await this.bookRepository.getBook(id);
    }

    async getAllBooks(): Promise<BookDTO[]> {
        return await this.bookRepository.getAllBooks();
    }

    async updateBook(newBook: Book, id: any): Promise<Book> {
        return await this.bookRepository.updateBook(newBook, id);
    }

    async deleteBook(id: any): Promise<Book> {
        return await this.bookRepository.deleteBook(id);
    }
}
