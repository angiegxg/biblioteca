import React from "react";
import BooksToRead from "../BooksToRead/BooksToRead";
import BooksDisponibility from "../Disponibility/BooksDisponibility";
import "./BookList.modules.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

function BooksList({ books, toRead }) {
  const { counterToRead } = useSelector((state) => state);
  

 
  return (
    <div>
      <div className="div-title"> 
<h1 className="title">
  Biblioteca
</h1>

      </div>
    <div className="viewList">
      <BooksDisponibility books={books} />
      {counterToRead !== 0 ? <BooksToRead toRead={toRead} /> : null}

      
    </div>
    </div>
  );
}

export default BooksList;
