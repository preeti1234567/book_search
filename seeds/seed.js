const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
  {
    title: "Hello World",
    authors: "admin",
    description:
      "Welcome to your first post! To create posts create a title and description. Don't forget to include your screen name!",
    image: "",
    link: "",
    id: "1"
  },
  {
    title: "Hello Baby",
    authors: "Eddy ",
    description:
      "Welcome Baby",
    image: "",
    link: "",
    id: "2"
  }

];

db.Books.remove({})
  .then(() => db.Books.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
