import * as mongoose from 'mongoose';
import { Author } from './author.schema';


export const BookSchema = new mongoose.Schema({
    name: String,
    author: [Author.schema],
    language: String,
    realeaseYear: Number,
    pages: Number,
    publisher: String
});

const Book = mongoose.model('Book', BookSchema);