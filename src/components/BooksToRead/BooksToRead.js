import React from 'react'
import Book from '../Book/Book'
import './BooksToRead.modules.css'

function BooksToRead({toRead}) {
  console.log("book to read", toRead)
  return (
    <div className=''>
     {toRead.map((book)=><Book book= {book} />)} 
    </div>
  )
}

export default BooksToRead