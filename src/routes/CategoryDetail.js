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
      <p>
        List of pokemons of category:
        {typeId}
      </p>
      {pokemons.map((element) => {
        const pokemonId = element.pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '');
        return (
          <NavLink
            key={element.pokemon.url}
            to={`/pokemon/${pokemonId}`}
          >
            {element.pokemon.name}
          </NavLink>
        );
      })}
    </>
  );
};

export default CategoryDetail;
