import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/PokemonsPerCategory.css';

const PokemonOfCategory = ({ name, url, cssClass }) => {
  const [power, setPower] = useState(0);
  useEffect(() => {
    const fetchPokemonPower = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setPower(data.base_experience);
    };
    fetchPokemonPower();
  });
  return (
    <div className={`pokemon-of-category-container ${cssClass}`}>
      <p className="pokemon-of-category-name">{name}</p>
      <p className="pokemon-of-category-power">
        Power:
        {power}
      </p>
    </div>
  );
};

PokemonOfCategory.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  cssClass: PropTypes.string.isRequired,
};

export default PokemonOfCategory;
