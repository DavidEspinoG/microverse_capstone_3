import '../styles/Categories.css';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Subtitle from '../components/Subtitle';
import Category from '../components/Category';
import chessClasses from '../utils/chessClasses';
import SearchInput from '../components/SearchInput';

const Categories = () => {
  const types = useSelector((state) => state.types);
  const searchText = useSelector((state) => state.search);
  const filtered = useSelector((state) => state.filtered);
  const elements = filtered.length === 0 && searchText === '' ? types : filtered;
  const classes = chessClasses(types.length);
  return (
    <>
      <Header title="Pokemon types" />
      <SearchInput />
      <Subtitle text="Pokemon types" />
      <div className="categories-container">
        {elements.map((element, index) => {
          const cleanedUrl = element.url.replace('https://pokeapi.co/api/v2/', '');
          const to = `${cleanedUrl}${element.name}`;
          return (
            <Category
              name={element.name}
              to={to}
              key={element.url}
              url={element.url}
              color={classes[index]}
            />
          );
        })}
      </div>
    </>

  );
};

export default Categories;
