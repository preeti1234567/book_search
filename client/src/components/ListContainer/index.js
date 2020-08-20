import React, {
    useEffect, useState
} from 'react'
import ListItem from "../ListItem/ListItem"
import ListGroup from "react-bootstrap/ListGroup"
import {
    useBookContext
} from "../../utils/BookContext"
import API from "../../utils/API"

export default function ListContainer() {
    const [Books, setBooks] = useState([])
    const [state, dispatch] = useBookContext();

    useEffect(() => {
        if (state.searchInput) {

            const title = state.searchInput.replace(/ /g, "+");
            API.getBooks(title)
                .then(results => {
                    const books = [];
                    results.data.items.forEach(book => {
                        const bookData = {
                            id: book.id,
                            title: book.volumeInfo.title,
                            authors: book.volumeInfo.authors,
                            description: book.volumeInfo.description,
                            link: book.volumeInfo.infoLink
                        }
                   
                        if (book.volumeInfo.imageLinks){
                            if (book.volumeInfo.imageLinks.thumbnail){
                                bookData["image"] = book.volumeInfo.imageLinks.thumbnail
                            }
                        } else {
                            bookData["image"] = "./img/download.png"
                        }
                        
                        books.push(bookData)
                    });
                    setBooks(books)

                    dispatch({ type: "searchResults",
                        searchResults: books
                    })
                })
        }
    }, [state])


    return (
    <>
        {Books.length ? (<h1 className="d-flex justify-content-center">Results for: {state.searchInput}</h1>) : null}
        <ListGroup>
            {Books ? (Books.map((book, i) => (
                <ListItem book={book} key={i}/>
            ))) : null}
        </ListGroup>
    </>

    )
}

            