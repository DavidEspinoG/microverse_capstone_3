import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/pokemonSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const types = useSelector((state) => state.types);
  return (
    <div className="main-container">
      <h1>List of pokemon types</h1>
      {types.map((element) => {
        const endpoint = element.url.replace('https://pokeapi.co/api/v2/', '');
        return (
          <NavLink
            to={`${endpoint}`}
            key={element.url}
          >
            {element.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Home;
