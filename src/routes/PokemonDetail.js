import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonDetailed } from '../redux/pokemonSlice';
import Header from '../components/Header';

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
      <p>
        Name:
        {pokemon.name}
      </p>
    </>
  );
};

export default PokemonDetail;
