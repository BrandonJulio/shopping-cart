import './Products.css'
import {AddToCartIcon} from './Icons'


export function Products ({products}){
    return (
        <main className='products'>
            <ul>
                {products.slice(0, 10).map(product=>( 
                    <li key={product.id}>
                    <img src={product.image} alt={product.title} 
                    />
                    <div>
                    <strong>{product.title}</strong> -${product.price}
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

