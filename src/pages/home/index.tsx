import { BsCartPlus } from "react-icons/bs";
import { api } from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";

export interface ProductProps{
    id:number,
    title:string,
    description: string,
    price: number,
    cover: string
}

export function Home() {
    const {addItemCart} = useContext(CartContext)
    const [product, setProduct] = useState<ProductProps[]>([])

    useEffect(()=>{
        async function getProduct(){
            const response = await api.get('/products')
            setProduct(response.data)
        }

        getProduct()
    },[])

    // adicionar item ao carrinho, importando todas suas informações
    function handleAddCartItem(product: ProductProps){
        toast.success('added to cart')
        addItemCart(product)
        
        
    }
  return (
    <div className="min-h-screen ">
         <h1 className="font-medium text-2xl text-center py-4 text-white">Trending products</h1>
        <main className="w-full max-w-7xl px-4 mx-auto ">
        <div className="grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-5">
            {product.map((product)=>(
                <section key={product.id} className="w-full">
                <img src={product.cover} 
                alt={product.title} />
                <p className="font-medium mt-1 mb-2 text-zinc-100">{product.title}</p>
                <div className="flex items-center gap-3">
                    <strong className="text-zinc-100 text-lg">
                        {product.price.toLocaleString('pt-br', {
                            style:'currency',
                            currency: 'brl'
                        })}
                    </strong>
                    <button className="bg-white rounded-md px-2 py-1 hover:bg-slate-300 transition-colors " onClick={()=>handleAddCartItem(product)}>
                        <BsCartPlus size={20} color="#000000" />
                    </button>
                </div>
            </section>
            ))}
        </div>
        </main>
    </div>
    
   
    
  )
}