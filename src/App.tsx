import {Home} from './pages/home'
import {Cart} from './pages/cart'
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Product } from './pages/product'
import{NotFound} from './pages/NotFound'

import {Layout} from './components/layout'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> }, 
      {path: '/cart', element: <Cart />},
      {path: '/product/:id', element: <Product />},
      {path:'*', element: <NotFound />}
    ]
  }])

export {router}