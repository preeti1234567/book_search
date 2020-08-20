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


// const mongoose = require("mongoose");
// const Books = require("./models/bookSchema.js");
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booksDB", { useNewUrlParser: true });

// const data = {
//   title: "Title",
//   authors: ["author1, author2"],
//   description:
//     "\"Don't worry if it doesn't work right. If everything did, you'd be out of a job\" - Mosher's Law of Software Engineering",
//   image: "someLinkToAnImage",
//   link:"LinkToTheBookInGoogle"
// };

// Books.create(data)
//   .then(book => {
//     console.log(book);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });
