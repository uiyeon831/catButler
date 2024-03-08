import { createBrowserRouter } from "react-router-dom";
import './App.css'

import Layout from './layout'

import MainPage from './pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      }
    ]
  }
])
