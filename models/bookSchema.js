const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Book must have a title"
    },
    authors: {
        type: Array,
        trim: true,
        required: "Book must have an Author"
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
    link: {
        type: String
    },
    id: {
        type: String,
        required: "must have an ID"
    }
});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;

