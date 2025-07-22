import { useContext } from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { CartContext } from '../../context/CartContext'

export function Header() {
  const {cartAmount} = useContext(CartContext)

  return (
    <header className='w-full px-1 bg-slate-900'>
    
      <nav className='w-full max-w-7xl h-14 flex items-center justify-between mx-auto'>
        <Link to="/" className='bg-slate-100 rounded-md px-2 py-1 hover:bg-slate-300 transition-colors'>Home </Link>
        <Link to="/cart" className='flex items-center gap-2 text-slate-100 bg-white rounded-md px-2 py-1 hover:bg-slate-300 transition-colors'>
          <FiShoppingCart className=''size={24} color='#121212'/>
              {cartAmount > 0 && (
              <span className='text-sm bg-gray-700 rounded-full px-2 py-1'>
                {cartAmount}
              </span>
              )}
        </Link>
      </nav>
    </header>
  )
}