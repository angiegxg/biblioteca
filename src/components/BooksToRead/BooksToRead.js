import React from 'react'
import Book from '../Book/Book'

function BooksToRead({books}) {
  return (
    <div>
     {books.map((book)=>{<Book book= {book} />})} 
    </div>
  )
}

export default BooksToRead