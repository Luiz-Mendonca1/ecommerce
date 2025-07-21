import { BsCartPlus } from "react-icons/bs";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

interface ProductProps{
    id:number,
    title:string,
    description: string,
    price: number,
    cover: string
}

export function Home() {
    const [product, setProduct] = useState<ProductProps[]>([])

    useEffect(()=>{
        async function getProduct(){
            const response = await api.get('/products')
            setProduct(response.data)
        }

        getProduct()
    },[])
  return (
    <div className="min-h-screen ">
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
                    <button className="bg-white text-white rounded-md px-2 py-1 hover:bg-slate-300 transition-colors">
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