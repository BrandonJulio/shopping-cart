// import { useState } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters.js'

export function Filters(){
    const {filters, setFilters} = useFilters()
    // const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (event) => {
       setFilters(prevState =>({
            ...prevState, 
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) =>{
       setFilters(prevState =>({
            ...prevState,
            category: event.target.value
        }))
    }
    
    return(
    <section className="filters">
        
        <div>
            <label htmlFor='price'>Precio a partir de:</label>
            <input 
            type='range'
            id='price'
            min='0'
            max='1000'
            onChange={handleChangeMinPrice} 
            value={filters.minPrice}
            />
            <span>${filters.minPrice}</span>
        </div>

        <div>
            <label htmlFor='category'>Categoría</label>
            <select id='category' onChange={handleChangeCategory}>
                <option value="all">Todos</option>
                <option value="electronics">Electrónicos</option>
                <option value="men's clothing">Ropa de hombres</option>
                <option value="women's clothing">Ropa de mujeres</option>
                <option value="jewelery">Joyas</option>
            </select>
        </div>

    </section>
    )
}