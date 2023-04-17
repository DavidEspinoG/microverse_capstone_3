import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPokemonsOfType } from '../redux/pokemonSlice';

const CategoryDetail = () => {
  const { typeId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonsOfType(typeId));
  }, [dispatch, typeId]);
  const pokemons = useSelector((state) => state.pokemonsOfType);
  return (
    <>
      <NavLink to="/pokemon/1">Pokemon detail</NavLink>
      <p>
        List of pokemons of category:
        {typeId}
      </p>
      {pokemons.map((element) => <p key={element.pokemon.url}>{element.pokemon.name}</p>)}
    </>
  );
};

export default CategoryDetail;
