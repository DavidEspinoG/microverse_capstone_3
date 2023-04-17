import { useParams, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPokemonsOfType } from '../redux/pokemonSlice';

const CategoryDetail = () => {
  const { typeId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonsOfType(typeId));
  }, [dispatch, typeId]);
  return (
    <>
      <p>
        Category id:
        {typeId}
      </p>
      <NavLink to="/pokemon/1">Pokemon detail</NavLink>
      <p>
        List of pokemons of category:
        {typeId}
      </p>
    </>
  );
};

export default CategoryDetail;
