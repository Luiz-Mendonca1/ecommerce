import { api } from "../../services/api";
import type { ProductProps } from "../home";
import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BsCartPlus, BsArrowLeft } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import toast from 'react-hot-toast'

export function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { addItemCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await api.get(`/products/${id}`)
        setProduct(response.data);
      } catch (err) {
        setError("Erro ao carregar o produto")
      } finally {
        setLoading(false)
      }
    }

    getProduct();
  }, [id])

  function handleAddItem(product: ProductProps) {
    toast.success("Produto adicionado no carrinho!", {
      style: {
        borderRadius: '10px',
        background: '#10B981',
        color: '#fff',
      }
    })
    addItemCart(product)
  }

  if (error) {
    return (
      <div className="w-full max-w-7xl px-4 mx-auto my-6 text-center py-20">
        <h2 className="text-2xl font-bold text-white">{error}</h2>
        <button 
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-2 bg-emerald-500 text-white rounded-lg flex items-center gap-2 mx-auto"
        >
          <BsArrowLeft size={20} />
          Back
        </button>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="w-full max-w-7xl px-4 mx-auto my-6 text-center py-20">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-emerald-500 border-r-transparent">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="mt-4 text-white">Loading product...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="w-full max-w-7xl px-4 mx-auto my-6 text-center py-20">
        <h2 className="text-2xl font-bold text-white">Produto não encontrado</h2>
        <button 
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-2 bg-emerald-500 text-white rounded-lg flex items-center gap-2 mx-auto"
        >
          <BsArrowLeft size={20} />
          Back
        </button>
      </div>
    )
  }

  return (
    <div className=" min-h-screen">
      <main className="w-full max-w-7xl px-4 mx-auto py-8">
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-gray-800 text-white rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-colors"
        >
          <BsArrowLeft size={18} />
          Back
        </button>

        <section className="w-full">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Imagem do produto */}
            <div className="flex-1 bg-gray-800 rounded-xl p-6 flex items-center justify-center">
              <img
                className="w-full max-h-96 object-contain"
                src={product.cover}
                alt={product.title}
              />
            </div>

            {/* Informações do produto */}
            <div className="flex-1 text-white">
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              
              <div className="prose prose-invert max-w-none mb-6">
                {product.description.split('\n').map((paragraph, i) => (
                  <p key={i} className="mb-4 text-gray-300">{paragraph}</p>
                ))}
              </div>

              <div className="flex items-center justify-between mt-8">
                <strong className="text-2xl text-emerald-500">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  })}
                </strong>

                <button 
                  onClick={() => handleAddItem(product)}
                  className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg transition-colors"
                >
                  <BsCartPlus size={20} />
                  Add to cart
                </button>
              </div>

              {/* Detalhes adicionais */}
              <div className="mt-12 pt-6 border-t border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Additional info</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400">Product code</p>
                    <p className="font-medium">{product.id}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Availability</p>
                    <p className="text-emerald-400 font-medium">In stock</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}