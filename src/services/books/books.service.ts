import { Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { BookRepository } from 'src/mongo/repository/book.repository';

@Injectable()
export class BooksService {

    constructor(
        private readonly bookRepository: BookRepository
    ) {}

    async saveBook(newBook: BookDTO): Promise<BookDTO> {
        return await this.bookRepository.saveBook(newBook);
    }
}
