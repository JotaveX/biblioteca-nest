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

    async getBook(id: any): Promise<BookDTO> {
        return await this.bookModel.findById(id).exec() as BookDTO; // Cast the result as BookDTO
    }

    async getAllBooks(): Promise<BookDTO[]> {
        return await this.bookModel.find().exec() as BookDTO[]; // Cast the result as BookDTO
    }

    async updateBook(newBook: Book, id: any): Promise<Book> {
        return await this.bookModel.findByIdAndUpdate
        (id, newBook, { new: true }) as Book; // Cast the result as Book
    }

    async deleteBook(id: any): Promise<Book> {
        return await this.bookModel.findByIdAndDelete(id) as Book; // Cast the result as Book
    }
}