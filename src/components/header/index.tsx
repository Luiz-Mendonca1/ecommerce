import {FiShoppingCart} from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className='w-full px-1 bg-slate-200'>
    
      <nav className='w-full max-w-7xl h-14 flex items-center justify-between mx-auto'>
        <Link to="/" className='white rounded-md px-2 py-1 hover:bg-slate-300 transition-colors'>Home </Link>
        <Link to="/cart" className='flex items-center gap-2 text-slate-800 bg white rounded-md px-2 py-1 hover:bg-slate-300 transition-colors'>
          <FiShoppingCart className=''size={24} color='#121212'/>
          <span className='text-sm bg-gray-700 text-white rounded-full px-2 py-1'>
            2
          </span>
        </Link>
      </nav>
    </header>
  )
}