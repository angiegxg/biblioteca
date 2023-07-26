import React from 'react'
import Book from '../Book/Book'
import { useSelector } from 'react-redux';

import '../Disponibility/BooksDisponibility.modules.css'

function BooksToRead({toRead}) {
  console.log("book to read", toRead)
  const counterToRead = useSelector(state=>state.counterToRead)
  return (
    <div className='container'>
      <div className='header'>
      <h1>Mi Lista de Lectura</h1>
      <h2>{counterToRead} en lectura</h2>

      </div>

     {toRead.map((book)=><Book key={book.id} book= {book} />)} 
    </div>
  )
}

export default BooksToRead