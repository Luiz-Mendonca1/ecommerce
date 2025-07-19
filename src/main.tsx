import React from 'react'
import {router} from './App'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
