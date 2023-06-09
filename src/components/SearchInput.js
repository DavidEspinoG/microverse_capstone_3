import { useDispatch, useSelector } from 'react-redux';
import pokemonSlice from '../redux/pokemonSlice';
import '../styles/SearchInput.css';
import filterState from '../utils/filterState';

const { updateFiltered, updateSearch } = pokemonSlice.actions;

const SearchInput = () => {
  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(updateSearch(event.target.value));
    dispatch(updateFiltered(filterState(event.target.value, types)));
  };
  return (
    <div className="input-container">
      <input
        onChange={handleChange}
        className="search-input"
        placeholder="Search Pokemon Type"
      />
    </div>
  );
};

export default SearchInput;
