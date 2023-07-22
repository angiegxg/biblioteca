import React from 'react'
import Book from '../Book/Book'
import '../Disponibility/BooksDisponibility.modules.css'

function BooksToRead({toRead}) {
  console.log("book to read", toRead)
  return (
    <div className='container'>
      <div className='header'>
      <h1>Mi Lista de Lectura</h1>

      </div>
     {toRead.map((book)=><Book key={book.id} book= {book} />)} 
    </div>
  )
}

export default BooksToRead