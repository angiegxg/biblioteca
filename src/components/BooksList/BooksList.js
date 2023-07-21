import React from 'react'
import BooksToRead from '../BooksToRead/BooksToRead'
import BooksDisponibility from '../Disponibility/BooksDisponibility'


function BooksList({books,toRead}) {
  
  return (
    <div>
      
    <BooksDisponibility books={books}  />
 <BooksToRead toRead= {toRead} />
    </div>
  )
}

export default BooksList