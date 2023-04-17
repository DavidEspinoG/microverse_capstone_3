import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const { pokemonId } = useParams();
  return (
    <>
      <p>
        Pokemon details of pokemon with id:
        {pokemonId}
      </p>
    </>
  );
};

export default PokemonDetail;
