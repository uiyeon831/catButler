import { createBrowserRouter } from "react-router-dom";
import './App.css';

import Layout from './layout';
import MainPage from './pages';
import JoinPage from "./pages/Join";
import LoginPage from './pages/Login/index';
import ProductPage from './pages/Product/index';
import ProductDetailPage from './pages/ProductDetail/index';

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
  },
  {
    path: 'products',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <ProductPage />,
      },
      {
        path: ':id',
        element: <ProductDetailPage />,
      },
    ],
  },
  {
    path: 'join',
    element: <div className="appNone"><JoinPage /></div>,
  },
  {
    path: 'login',
    element: <div className="appNone"><LoginPage /></div>,
  },
])
