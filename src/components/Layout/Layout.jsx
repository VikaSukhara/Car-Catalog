import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Nav, StyledLink } from './Layout.styled.js';
export const Layout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </Nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
