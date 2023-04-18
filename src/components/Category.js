import PropTypes from 'prop-types';
import '../styles/Category.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Category = ({
  name, to, url,
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
    <div className="category">
      <div>
        <NavLink
          className="category-name"
          to={to}
        >
          {name}
        </NavLink>
        <p className="category-number">{pokeNumber}</p>
      </div>
    </div>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Category;
