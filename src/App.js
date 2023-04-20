import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Categories from './routes/Categories';
import CategoryDetail from './routes/CategoryDetail';
import PokemonDetail from './routes/PokemonDetail';
import './styles/mediaQueries.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />}>
      <Route path="/" element={<Categories />} />
      <Route path="/type/:typeId/:typeName" element={<CategoryDetail />} />
      <Route path="pokemon/:pokemonId" element={<PokemonDetail />} />
    </Route>
  </Routes>
);

export default App;
