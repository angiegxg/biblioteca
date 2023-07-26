
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterPages } from '../redux/actions'

function FilterPages() {
    
    const [ maxPages, setMaxPages ] = useState('')
    const dispatch=useDispatch()
    const handleMaxPagesChange = (e) => {
        setMaxPages(e.target.value);
        dispatch(filterPages(e.target.value))
      };


    return (
        <div>
            <div>
            <p>paginas desde {maxPages} hasta 1500</p>
            <input
                type="range"
                onChange={handleMaxPagesChange}
                min={1}
                max={1500}
                step={50}
                value={maxPages}
                className="custom-slider"
            ></input>
        </div>


        </div>
    )
}

export default FilterPages