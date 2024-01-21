import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Nav } from './Layout.styled.js';
export const Layout = () => {
  return (
    <div>
      <header style={{ marginTop: '30px', paddingLeft: '30px' }}>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </Nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
