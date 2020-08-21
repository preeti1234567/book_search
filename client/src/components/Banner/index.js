import React, { useRef } from 'react'
import "./style.css"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import { useBookContext } from "../../utils/BookContext"

function Banner() {

    const inputRef = useRef();
    const [state, dispatch] = useBookContext();

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputRef.current.value);
        dispatch({
            type: "searchInput",
            searchInput: inputRef.current.value
        })
    }

    return (

    <div className = "myContainer">  
        <img className="d-block w-100" src="./bookbanner4.jpg" alt="First slide"/>
        <div className="centered">
            <h1>Book Search</h1>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="title or author"
                aria-label="Book title or Author"
                aria-describedby="basic-addon1"
                ref={inputRef}
                />
                <InputGroup.Append>
                <Button variant="info"><i onClick={handleSubmit}>Search</i></Button>

                </InputGroup.Append>
            </InputGroup>
        </div>
    </div>
 

    )
}

export default Banner;