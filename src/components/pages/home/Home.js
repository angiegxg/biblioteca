import React, { useEffect } from 'react'
import BooksList from '../../BooksList/BooksList'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../../redux/actions'

function Home() {
const books= useSelector(state=>state.disponibilityBooks)
const dispatch= useDispatch()



useEffect(()=>{dispatch(getBooks())}, [])

  return (
    <div>
        <BooksList books= {books} />
    </div>
  )
}

export default Home