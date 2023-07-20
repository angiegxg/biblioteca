import React from 'react'
import './Book.modules.css'

function Book({ book }) {

  return (
    <div className='card'>
      <img src={book.cover}></img>
      <p> {book.genre} </p>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg></a>






    </div>
  )
}

export default Book