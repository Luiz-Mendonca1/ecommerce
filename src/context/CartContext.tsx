import { createContext, useState } from "react";
import type { ReactNode} from 'react'

interface CartContextData{
    cart: CartProps[]
    cartAmount: number
}

interface CartProps{
    id: number,
    title: string,
    description: string,
    price: number,
    cover: string,
    amount: number,
    total: number
}

interface CartProvinderProps{
    children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

function CartProvinder({children}: CartProvinderProps){ {/*pega informações englobadas dos produtos existentes que estam sendo englobados e soma a quantidade com CartAmount*/}
    const[cart, setCart] = useState<CartProps[]>([])
    
    return(
        <CartContext.Provider 
            value={{cart, cartAmount: cart.length}}>
            
                {children}
        </CartContext.Provider>
    )
}

export default CartProvinder