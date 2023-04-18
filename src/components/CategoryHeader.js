import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RandomLogo from '../utils/randomSvg';
import '../styles/CategoryHeader.css';

const CategoryHeader = ({ name }) => {
  const { typeId } = useParams();
  const [pokeNumber, setNumber] = useState(0);
  useEffect(() => {
    const fetchPokemonsNumber = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/type/${typeId}`);
      const data = await res.json();
      setNumber(data.pokemon.length);
    };
    fetchPokemonsNumber();
  }, [typeId]);
  return (
    <div className="category-header">
      <RandomLogo cssClass="category-header-logo" />
      <div>
        <p className="category-header-text">{name}</p>
        <p className="category-header-number">
          {`${pokeNumber} Pokémons`}
        </p>
      </div>
    </div>
  );
};
CategoryHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CategoryHeader;
