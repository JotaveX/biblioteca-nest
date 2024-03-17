import { Document } from "mongoose";
import * as mongoose from "mongoose";

export interface Book extends Document {
    readonly _id: mongoose.Schema.Types.ObjectId;
    readonly name: string;
    readonly author: Array<{ name: string, surname: string }>;
    readonly language: string;
    readonly realeaseYear: number;
    readonly pages: number;
    readonly publisher: string;
}