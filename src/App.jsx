import {products as initialProducts} from './mocks/products.json'
import { Products } from "./components/Products"
import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useFilters } from './hooks/useFilters'




function App() {
  const {filters, filterProducts} = useFilters()
  const [products] = useState(initialProducts)
  const filteredProducts = filterProducts(products)


   return (
    <>
    <Header/>
    <Products products={filteredProducts}/>
    <Footer/>
    </>
    
  )
}

export default App
