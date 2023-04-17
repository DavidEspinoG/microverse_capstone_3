import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import Home from './routes/Home';
import CategoryDetail from './routes/CategoryDetail';
import PokemonDetail from './routes/PokemonDetail';
import store from './redux/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/type/:typeId',
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
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>,
);