import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../context/CartContext";

export function Cart() {
  const {cart, total, addItemCart, removeItemCart} = useContext(CartContext)
  return (
    <div className=" h-fit">  
      <div className="w-full max-w-7xl mx-auto  pb-4">  
        <h1 className="font-medium text-2xl text-center py-4 text-white">My cart</h1>
        
        {/* caso nao tenha nenhum produto adicionado alterar a pagina para redireciona-lo a home page */}
        {cart.length === 0 &&(
          <div className="flex flex-col items-center justify-center m-[20%] min-h-[200px] p-6 text-center">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            
            <p className="text-gray-200 text-lg font-medium mb-6">Your cart is empty</p>
            
            <Link
              to="/"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-sm transition-all duration-200 transform hover:scale-105"
            >
              Browse Products
            </Link>
          </div>
        )}

        {cart.map( (item) => (
          <section className="flex items-center justify-between border-b-2 border-slate-800">
          <img 
            src={item.cover} 
            alt={item.title} 
            className="w-28"
          />
          <strong className="text-white">Price: {item.price}</strong>
          <div className="flex items-center justify-center gap-3">
            <button onClick={()=>removeItemCart(item)} className="bg-white px-2 cursor-pointer rounded text-black font-medium flex items-center justify-center">
              -
            </button>
            <strong className="text-white">{item.amount}</strong>
            <button onClick={()=>addItemCart(item)} className="bg-white px-2 cursor-pointer rounded text-black font-medium flex items-center justify-center">
              +
            </button>
          </div>
          <strong className="text-white float-right">
            Subtotal: {item.total.toLocaleString('pt-br',{
              style: 'currency',
              currency: 'BRL'
            })}
          </strong>
        </section>
        ))}
        
        {cart.length !== 0 && <strong className="text-white block mt-4">Total: {total}</strong>}
        
      </div>
    </div>
  );
}