import { createContext, useState } from "react";
import type { ReactNode} from 'react'
import type { ProductProps } from "../pages/home";

interface CartContextData{
    cart: CartProps[]
    cartAmount: number
    addItemCart: (newItem: ProductProps)=> void
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
    
    function addItemCart(newItem: ProductProps){
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if(indexItem !== -1){
            // se nao acha produto dar como -1
            // caso adicione mais de um produto não altera cart do header e apenas alterar o total a pagar
            let cartList = cart

            cartList[indexItem].amount = cartList[indexItem].amount + 1
            cartList[indexItem].total=cartList[indexItem].amount *cartList[indexItem].price

            setCart(cartList)
            return
        }

        // adiciona produto
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products,data])
    }
    return(
        <CartContext.Provider 
            value=
            {{cart, 
            cartAmount: cart.length,
            addItemCart
            }}>
            
                {children}
        </CartContext.Provider>
    )
}

export default CartProvinder