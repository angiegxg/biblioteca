

import React from 'react';
import './Book.modules.css';
import { addToRead, removeToRead } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


function Book({ book }) {
  const dispatch = useDispatch();
  const toRead = useSelector(state => state.toRead);

  function handlerRead(book) {
    // Verificar si el libro ya está en la lista de "Para leer"
    if (toRead.some((item) => item.ISBN === book.ISBN)) {
      // Si está en la lista, lo removemos
      dispatch(removeToRead(book));
    } else {
      // Si no está en la lista, lo añadimos
      dispatch(addToRead(book));
    }
  }

  return (
    <div className='card'>
      <div className='divImgBook'>
        <img className='imgBook' src={book.cover} alt={book.title} />
      </div>
      
      <p>{book.genre}</p>
      {/* Botón para añadir o eliminar el libro de la lista de "Para leer" */}
      <button onClick={() => handlerRead(book)}>
        {/* Mostramos un icono de "+" si el libro no está en la lista, o una "x" si ya está */}
        {toRead.some((item) => item.ISBN === book.ISBN) ? 'x' : '+'}
      </button>
  
    </div>
  );
}

export default Book;
