import React from 'react'
import {router} from './App'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import ReactDOM from 'react-dom/client'
import CartProvinder from './context/CartContext'

ReactDOM.createRoot(document.getElementById('root')as HTMLElement).render(
  <React.StrictMode>
    <CartProvinder> {/*com o Cart provinder englobando pode ser importado e ir para o carrinho*/}
      <RouterProvider router={router} />
    </CartProvinder>
  </React.StrictMode>,
)
