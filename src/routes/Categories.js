import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Subtitle from '../components/Subtitle';

const Categories = () => {
  const types = useSelector((state) => state.types);
  return (
    <>
      <Header title="Pokemon types" />
      <Subtitle text="Pokemon types" />
      <div className="categories-container">
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
    </>

  );
};

export default Categories;
