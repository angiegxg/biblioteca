import React from 'react';
import Book from '../Book/Book';
import './BooksDisponibility.modules.css';
import FilterGenre from '../filterGenre/FilterGenre';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function BooksDisponibility({ books }) {
  const toRead = useSelector((state) => state.toRead);

  // Filtrar los libros que no están en la lista de lectura
  const availableBooks = books.filter((book) => !toRead.some((item) => item.ISBN === book.ISBN));

  return (
    <div className='container'>
      <div className='header'>
      <h1>Libros Disponibles</h1>
      <FilterGenre />
      </div>
      {availableBooks.map((book) => <Book key={book.ISBN} book={book} />)}
    </div>
  );
}

export default BooksDisponibility;

