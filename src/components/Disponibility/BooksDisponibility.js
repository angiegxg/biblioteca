import React from 'react'
import Book from '../Book/Book'
import './BooksDisponibility.modules.css'

function BooksDisponibility({books}) {
 
  return (
    <div className='container'>
      {books.map((book) => <Book key={book.ISBN} book={book} />)}
    </div>
  )
}

export default BooksDisponibility
