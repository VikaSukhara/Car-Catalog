import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, StyledLink } from './Layout.styled.js';
export const Layout = () => {
//   console.log(window.location.href)
//   const page = window.location.href;

//   if(page.endsWith('favorite')){
//     console.log("yes")
//   }
//   function toggleHandler(e) {
//     e.preventDefault();
//     (e.target.classList.contains("active") === true) ? e.target.classList.remove("active") : e.target.classList.add("active");
// }

// const activeTab = (history, path) => {
//   if (history.location.pathname === path) {
//     return { color: "red" };
//   }
// }

  return (
    <div>
      <header style={{ marginTop: '40px', paddingLeft: '50px' }}>
        <Nav >
          <StyledLink to="/" >Home</StyledLink>
          <StyledLink to="/catalog" >Catalog</StyledLink>
          <StyledLink to="/favorites" >Favorites</StyledLink>
        </Nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
