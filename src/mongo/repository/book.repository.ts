import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Book } from "../interfaces/book.interface";
import { InjectModel } from "@nestjs/mongoose";
import { BookDTO } from "src/DTO/books.dto";

@Injectable()
export class BookRepository {
   

    constructor(
        @InjectModel('Book') private readonly bookModel: Model<Book>
    ) { }

    async saveBook(newBook: BookDTO): Promise<BookDTO> {
        const book = new this.bookModel(newBook);
        return await book.save() as BookDTO; // Cast the result as BookDTO
    }

    
}