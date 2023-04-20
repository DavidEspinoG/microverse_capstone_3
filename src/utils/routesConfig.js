import Home from '../routes/Home';
import CategoryDetail from '../routes/CategoryDetail';
import PokemonDetail from '../routes/PokemonDetail';
import Categories from '../routes/Categories';

const routesConfig = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Categories />,
      },
      {
        path: '/type/:typeId/:typeName',
        element: <CategoryDetail />,
      },
      {
        path: 'pokemon/:pokemonId',
        element: <PokemonDetail />,
      },
    ],
  },
];

export default routesConfig;
