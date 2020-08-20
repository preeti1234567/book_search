import React, { createRef, useState } from 'react'
import ListGroup from "react-bootstrap/ListGroup"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import { useBookContext } from "../../utils/BookContext"
export default function ListItem({ book }) {
    const [_, dispatch] = useBookContext();
    const [disabled, setdisabled] = useState(false)
    const book_id = createRef()
    

    function handleSave (e){
        e.preventDefault();
        console.log(book_id.current.id);
        setdisabled(true)
        dispatch({type: "saveBook",
        id: book_id.current.id})
    }

    return (
    <ListGroup.Item>
        <Row>
            <Col>
            <h2>{book.title}</h2>
            <p>{book.authors}</p>
            </Col>
    
            <Col className="d-flex justify-content-end align-items-start">
                <a className="mx-2 btn btn-info" href={book.link} target="_blank" rel="noopener noreferrer">View</a>
                <Button className="mx-2 bg-success" onClick={handleSave} ref={book_id} id={book.id} disabled={disabled}>Save</Button>

            </Col>
        </Row>

        <Row>
        <Col xs={6} md={4} className="d-flex align-items-center justify-content-center">
            <Image src={book.image} rounded />
        </Col>

        <Col>
            <p>{book.description}</p>
        </Col>
        </Row>
    </ListGroup.Item>
    )
}
