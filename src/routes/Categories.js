import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header';

const Categories = () => {
  const types = useSelector((state) => state.types);
  return (
    <div className="categories-container">
      <Header title="Pokemon types" />
      {types.map((element) => {
        const endpoint = element.url.replace('https://pokeapi.co/api/v2/', '');
        return (
          <NavLink
            to={`${endpoint}${element.name}`}
            key={element.url}
          >
            {element.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Categories;
