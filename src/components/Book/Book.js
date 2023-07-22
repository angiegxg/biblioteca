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
      <div className='divImgBook'>

      <img className='imgBook' src={book.cover} alt={book.title}/>
      </div>
      
      <p> {book.genre} </p>
      <button onClick={() => handlerRead(book)}>
        {toRead.some((item) => item.ISBN === book.ISBN) ? 'x' : '+'}
      </button>
    </div>
  )
}

export default Book;
