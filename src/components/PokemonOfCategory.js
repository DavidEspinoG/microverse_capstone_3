import { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/PokemonsPerCategory.css';

const PokemonOfCategory = ({ name, url, cssClass }) => {
  useEffect(() => {
    const fetchPokemonPower = async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    };
    fetchPokemonPower();
  });
  return (
    <div className={`pokemon-of-category-container ${cssClass}`}>
      <p className="pokemon-of-category-name">{name}</p>
      <p className="pokemon-of-category-power">Power: 122</p>
    </div>
  );
};

PokemonOfCategory.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  cssClass: PropTypes.string.isRequired,
};

export default PokemonOfCategory;
