import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import CategoryDetail from './routes/CategoryDetail';
import PokemonDetail from './routes/PokemonDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/category/:categoryId',
    element: <CategoryDetail />,
  },
  {
    path: 'pokemon/:pokemonId',
    element: <PokemonDetail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
