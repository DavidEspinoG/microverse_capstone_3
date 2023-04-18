import '../styles/Home.css';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/pokemonSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div className="main-container">
      <Outlet />
    </div>
  );
};

export default Home;
