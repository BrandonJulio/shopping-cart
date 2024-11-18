import './Products.css'
import {AddToCartIcon} from './Icons'


export function Products ({products}){
    return (
        <main className='products'>
            <ul>
                {products.map(product=>( 
                    <li key={product.id}>
                    <img src={product.image} alt={product.title} 
                    />
                    <div>
                    <strong>{product.title}</strong>
                    </div>
                    <div>
                        <button>
                            <AddToCartIcon /> Add to Cart
                        </button>
                    </div>
                </li>
                ))}
            </ul>
                
        </main>
    )
}