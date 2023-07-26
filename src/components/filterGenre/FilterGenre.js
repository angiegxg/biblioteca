import React from 'react'
import { useDispatch } from 'react-redux'
import { filterBooks } from '../redux/actions'
import './FilterGenre.modules.css'

function FilterGenre() {
const genre=["Fantasía","Ciencia ficción","Zombies","Terror"]

const dispatch=useDispatch()

function handlerFilter (e){
    dispatch(filterBooks(e.target.value))
}

  return (
    <div>
        <select  className='mi-select' placeholder='Genero' onChange={handlerFilter}>
        <option value='all'>Mostrar todos</option>
            {genre.map((genre)=><option value={genre}> {genre} </option>)}
        </select>
    </div>
  )
}

export default FilterGenre