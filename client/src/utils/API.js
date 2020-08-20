import axios from "axios";

export default {
  // getting the books from google api
  getBooks: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
  },

  // getting all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // deleting books with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // saves the book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
