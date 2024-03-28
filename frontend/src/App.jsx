import { createBrowserRouter } from "react-router-dom";
import './App.css';

import Layout from './layout';
import MainPage from './pages';
import JoinPage from "./pages/Join";
import LoginPage from './pages/Login/index';
import ProductPage from './pages/Product/index';
import ProductDetailPage from './pages/ProductDetail/index';

//admin
import AdminProduct from './pages/Admin/Product/index';
import AdminCategory from './pages/Admin/Category/index';
import AdminUser from './pages/Admin/User/index';
import AdminOrder from './pages/Admin/Order/index';
import RegisterProduct from "./pages/Admin/RegisterProduct";


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
    path: 'admin',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <AdminProduct />,
      },
      {
        path: 'product',
        element: <AdminProduct />,
      },
      {
        path: 'product/register',
        element: <RegisterProduct />,
      },
      {
        path: 'category',
        element: <AdminCategory />,
      },
      {
        path: 'user',
        element: <AdminUser />,
      },
      {
        path: 'order',
        element: <AdminOrder />,
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
