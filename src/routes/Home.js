import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/pokemonSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="main-container">
      <h1>List of pokemon types</h1>
      <NavLink to="category/1">Type 1</NavLink>
    </div>
  );
};

export default Home;
