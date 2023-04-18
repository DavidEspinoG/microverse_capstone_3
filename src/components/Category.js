import PropTypes from 'prop-types';
import '../styles/Category.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RandomLogo from '../utils/randomSvg';

const Category = ({
  name, to, url, color,
}) => {
  const [pokeNumber, setNumber] = useState(0);
  useEffect(() => {
    const fetchPokemonsNumber = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setNumber(data.pokemon.length);
    };
    fetchPokemonsNumber();
  }, [pokeNumber, url]);

  return (
    <Link to={to} className="category-link">
      <div className={`category ${color}`}>
        <RandomLogo cssClass="category-logo" />
        <div>
          <p
            className="category-name"
          >
            {name}
          </p>
          <p className="category-number">{pokeNumber}</p>
        </div>
      </div>
    </Link>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Category;
