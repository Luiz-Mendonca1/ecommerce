import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { api } from "../../services/api";
import type { ProductProps } from "../home";

export function Product(){
    const {id} = useParams()
    const [product, setProduct] = useState<ProductProps>()
    
      useEffect(() => {
    async function getProduct(){
      const response = await api.get(`/products/${id}`)
      console.log(response.data);
    }

    getProduct();
  }, [id])

    return(
        <div>
            <h1 className="font-black text-white">product page: {id}</h1>
            
        </div>
    )
}