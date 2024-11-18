import {products as initialProducts} from './mocks/products.json'
import { Products } from "./components/Products"
import { useState } from 'react'
import { Header } from './components/Header'

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category:'all',
    minPrice:0,
})

const filtersProducts = (products) =>{
  return products.filter(products =>{
    return(
      products.price >= filters.minPrice &&
      (
        filters.category === 'all' || 
        filters.category === products.category
      )
    )
  })
}

const filteredProducts = filtersProducts(products)

   return (
    <>
    <Header changeFilters={setFilters}/>
    <Products products={filteredProducts}/>
    </>
    
  )
}

export default App
