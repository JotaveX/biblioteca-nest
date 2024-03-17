import mongoose from "mongoose";

export const AuthorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true }
});

export const Author = mongoose.model('Author', AuthorSchema);