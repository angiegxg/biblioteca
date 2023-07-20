import React from 'react'
import BooksToRead from '../BooksToRead/BooksToRead'
import BooksDisponibility from '../Disponibility/BooksDisponibility'

function BooksList({books}) {
  
  return (
    <div>
    <BooksDisponibility books={books}  />
    </div>
  )
}

export default BooksList