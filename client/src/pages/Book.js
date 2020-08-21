import React, { useEffect } from "react";
import { useBookContext } from "../utils/BookContext";

const Book = (props) => {
  const [state, dispatch] = useBookContext();

  useEffect(()=>{
    
  },[state])

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(e.target.getAttribute("id"))
    let id = e.target.getAttribute("id")
    dispatch({ type: "deleteBook", id: id })
    
  }
  return (
    <div className="card">
      <div className="row card-body">
        <div className="col-md-9 ">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-title">{props.authors}</h5>
        </div>
        <div className="col-md-3">
          <a className="btn btn-info" href={props.link} target="_blank" rel="noopener noreferrer">View</a>
          <button className="btn btn-danger" id={props.id} onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <div className="row card-body">
        <div className="col-md-3 ">
          <img src={props.image} className="card-img-top" alt="cardimage" />
        </div>
        <div className="col-md-9">
          <p className="card-text">{props.descrition}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
