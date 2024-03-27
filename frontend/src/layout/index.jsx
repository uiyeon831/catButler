import { Outlet } from 'react-router-dom';

import Header from './Header';
import Category from './Category';
import Footer from './Footer';
import { styled } from 'styled-components';


export default function Layout() {
  return (
    <Container>
      <Header />
      <Category />
      <Outlet />
      <Footer /> 
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`