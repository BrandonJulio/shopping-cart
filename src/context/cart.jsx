import { createContext, useState } from "react";

// 1. Crear contexo
export const CartContext = createContext();

// 2. Proveedor de contexto

export function CartProvider({children}){
    const [cart, setCart] = useState([]);

    const addToCart = product =>{
        const productInCartIndex = cart.findIndex(p => p.id === product.id);

        if(productInCartIndex>=0){
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1;
           return setCart(newCart);
        }
        // Producto no está en el carrito 
        setCart(prevSate =>([
            ...prevSate,{
                ...product,
                quantity: 1
            }
            
        ]))
    }

    const removeFromCart = product =>{
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    const clearCart = ()=>{
        setCart([]);
    }

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}