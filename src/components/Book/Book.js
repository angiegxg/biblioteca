import React from 'react'
import './Book.modules.css'
import { addToRead, removeToRead } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

function Book({ book }) {
  const dispatch = useDispatch();
  const toRead = useSelector(state => state.toRead);

  function handlerRead(book) {
    if (toRead.some((item) => item.ISBN === book.ISBN)) {
      dispatch(removeToRead(book));
    } else {
      dispatch(addToRead(book));
    }
  }

  return (
    <div className='card'>
      <img src={book.cover} alt="Book Cover" />
      <p> {book.genre} </p>
      <button onClick={() => handlerRead(book)}>
        {toRead.some((item) => item.ISBN === book.ISBN) ? 'x' : '+'}
      </button>
    </div>
  )
}

export default Book;
