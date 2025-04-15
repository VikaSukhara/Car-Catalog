import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home.jsx'));
const Catalog = lazy(() => import('../pages/Catalog.jsx'));
const Favorites = lazy(() => import('../pages/Favorites.jsx'));

export const App = () => {
  return (
    <div style={{ width: '1440px', margin: "0 auto"}}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
  );
};
