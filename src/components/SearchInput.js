import { useDispatch, useSelector } from 'react-redux';
import pokemonSlice from '../redux/pokemonSlice';
import '../styles/SearchInput.css';

const { updateSearch } = pokemonSlice.actions;

const SearchInput = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const handleChange = (event) => {
    dispatch(updateSearch(event.target.value));
  };
  return (
    <div className="input-container">
      <input
        value={search}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchInput;
