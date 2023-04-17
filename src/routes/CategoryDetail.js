import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPokemonsOfType } from '../redux/pokemonSlice';
import Header from '../components/Header';

const CategoryDetail = () => {
  const { typeId, typeName } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonsOfType(typeId));
  }, [dispatch, typeId]);
  const pokemons = useSelector((state) => state.pokemonsOfType);
  return (
    <>
      <Header title={`Type: ${typeName}`} />
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
