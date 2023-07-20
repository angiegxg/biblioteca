import React from 'react'
import Book from '../Book/Book'
import './BooksDisponibility.modules.css'
import FilterGenre from '../filterGenre/FilterGenre'

function BooksDisponibility({books}) {
 
  return (
    <div className='container'>
      <FilterGenre/>
      {books.map((book) => <Book key={book.ISBN} book={book} />)}
    </div>
  )
}

export default BooksDisponibility
