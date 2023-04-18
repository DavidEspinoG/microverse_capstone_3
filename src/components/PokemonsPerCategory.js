import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Subtitle from './Subtitle';

const PokemonsPerCategory = () => {
  const pokemons = useSelector((state) => state.pokemonsOfType);
  return (
    <>
      <Subtitle text="Pokemons of this type" />
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

export default PokemonsPerCategory;
