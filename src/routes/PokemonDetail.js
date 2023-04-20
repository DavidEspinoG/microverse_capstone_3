import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonDetailed } from '../redux/pokemonSlice';
import Header from '../components/Header';
import '../styles/PokemonDetail.css';
import Subtitle from '../components/Subtitle';

const PokemonDetail = () => {
  const dispatch = useDispatch();
  const { pokemonId } = useParams();
  useEffect(() => {
    dispatch(fetchPokemonDetailed(pokemonId));
  }, [dispatch, pokemonId]);
  const pokemon = useSelector((state) => state.pokemonDetailed);
  return (
    <>
      <Header title={pokemon.name} />
      <div className="pokemon-detail-image-container">
        <img
          src={pokemon?.sprites?.front_default}
          alt={pokemon?.name}
          className="pokemon-detail-image"
        />
      </div>
      <Subtitle text="Pokemon abilities" />
      <div className="pokemon-abilities-container">
        {pokemon.abilities?.map((element) => (
          <div className="pokemon-feature-container" key={element.ability.url}>
            <p className="pokemon-feature-text">{element.ability.name}</p>
          </div>
        ))}
      </div>
      <Subtitle text="Statistics" />
      <div className="pokemon-abilities-container">
        <div className="pokemon-feature-container">
          <p className="pokemon-feature-text">
            {`Base exp: ${pokemon.base_experience}`}
          </p>
        </div>
        <div className="pokemon-feature-container">
          <p className="pokemon-feature-text">
            {`Height: ${pokemon.height}`}
          </p>
        </div>
        <div className="pokemon-feature-container">
          <p className="pokemon-feature-text">
            {`Weight: ${pokemon.weight}`}
          </p>
        </div>
      </div>
      <Subtitle text="Moves" />
      <div className="pokemon-abilities-container">
        {pokemon.moves?.map((element) => (
          <div className="pokemon-feature-container" key={element.move.url}>
            <p className="pokemon-feature-text">{element.move.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PokemonDetail;
