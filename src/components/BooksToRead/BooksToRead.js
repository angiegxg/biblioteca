// BooksToRead.js

import React from 'react';
import Book from '../Book/Book';
import { useSelector } from 'react-redux';

import '../Disponibility/BooksDisponibility.modules.css';

function BooksToRead({ toRead }) {
  // Utilizamos useSelector para obtener datos del estado global de Redux
  const counterToRead = useSelector(state => state.counterToRead);
  


  return (
    <div className='mask'> 

    <div className='container containerRead'>
      <div className='header headerRead'>
        <h1>Mi Lista de Lectura</h1>
        <h2>{counterToRead} en lectura</h2>
      </div>

      {/* Renderizamos cada libro en la lista de "Para leer" utilizando el componente Book */}
      {toRead.map((book) => <Book key={book.id} book={book} />)}
    </div>
    </div>
  );
}

export default BooksToRead;
