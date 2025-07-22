import React from 'react'
import {router} from './App'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import ReactDOM from 'react-dom/client'
import CartProvinder from './context/CartContext'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')as HTMLElement).render(
  <React.StrictMode>
    <CartProvinder> {/*com o Cart provinder englobando pode ser importado e ir para o carrinho*/}
      <Toaster
        position='top-center'
        reverseOrder={false}
      />
      <RouterProvider router={router} />
    </CartProvinder>
  </React.StrictMode>,
)
