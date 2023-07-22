import React from 'react'
import BooksToRead from '../BooksToRead/BooksToRead'
import BooksDisponibility from '../Disponibility/BooksDisponibility'
import './BookList.modules.css'

function BooksList({books,toRead}) {
  
  return (
    <div className='viewList'>
      
    <BooksDisponibility books={books}  />
 <BooksToRead toRead= {toRead} />
    </div>
  )
}

export default BooksList