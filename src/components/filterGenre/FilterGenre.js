import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterBooks } from '../redux/actions'

function FilterGenre() {
const genre=["Fantasía","Ciencia ficción","Zombies","Terror"]
const {filter}=useSelector(state=>state)
const dispatch=useDispatch()

function handlerFilter (e){
    dispatch(filterBooks(e.target.value))
}

  return (
    <div>
        <select placeholder='Genero' onChange={handlerFilter}>
        <option value='all'>Mostrar todos</option>
            {genre.map((genre)=><option value={genre}> {genre} </option>)}
        </select>
    </div>
  )
}

export default FilterGenre