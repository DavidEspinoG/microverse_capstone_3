import '../styles/Categories.css';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Subtitle from '../components/Subtitle';
import Category from '../components/Category';

const Categories = () => {
  const types = useSelector((state) => state.types);
  return (
    <>
      <Header title="Pokemon types" />
      <Subtitle text="Pokemon types" />
      <div className="categories-container">
        {types.map((element) => {
          const cleanedUrl = element.url.replace('https://pokeapi.co/api/v2/', '');
          const to = `${cleanedUrl}${element.name}`;
          return (
            <Category
              name={element.name}
              to={to}
              key={element.url}
              url={element.url}
            />
          );
        })}
      </div>
    </>

  );
};

export default Categories;
