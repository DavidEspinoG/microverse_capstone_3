import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Subtitle from './Subtitle';
import PokemonOfCategory from './PokemonOfCategory';
import '../styles/PokemonOfCategory.css';
import CategoryDetailClasses from '../utils/CategoryDetailClasses';

const PokemonsPerCategory = () => {
  const pokemons = useSelector((state) => state.pokemonsOfType);
  const classes = CategoryDetailClasses(pokemons.length);
  return (
    <>
      <Subtitle text="Pokemons of this type" />
      <div className="pokemons-per-category-container">
        {pokemons.map((element, index) => {
          const pokemonId = element.pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '');
          return (
            <NavLink
              key={element.pokemon.url}
              to={`/pokemon/${pokemonId}`}
            >
              <PokemonOfCategory
                name={element.pokemon.name}
                url={element.pokemon.url}
                cssClass={classes[index]}
              />
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default PokemonsPerCategory;
