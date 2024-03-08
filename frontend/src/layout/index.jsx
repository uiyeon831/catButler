import { Outlet } from 'react-router-dom'

import Header from './Header'
import Category from './Category'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <Header />
      <Category />
      <Outlet />
      <Footer /> 
    </>
  )
}