import React from 'react'
import "./style.css"
// import InputGroup from "react-bootstrap/InputGroup"
// import FormControl from "react-bootstrap/FormControl"
// import Button from "react-bootstrap/Button"
// import { useBookContext } from "../../utils/BookContext"
export default function Banner() {

    // const inputRef = useRef();
    // const [state, dispatch] = useBookContext();

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     // console.log(inputRef.current.value);
    //     dispatch({
    //         type: "searchInput",
    //         searchInput: inputRef.current.value
    //     })
    // }

    return (

    <div className = "myContainer">  
        <img className="d-block w-100" src="./img/bookbanner4.jpg" alt="First slide"/>
        <div className="centered">
            <h1>Book Search</h1>
            {/* <InputGroup className="mb-3">
                <FormControl
                placeholder="title or author"
                aria-label="Book title or Author"
                aria-describedby="basic-addon1"
                ref={inputRef}
                />
                <InputGroup.Append>
                <Button variant="info"><i className="fa fa-search" onClick={handleSubmit}></i></Button>

                </InputGroup.Append>
            </InputGroup> */}
        </div>
    </div>
 

    )
}
