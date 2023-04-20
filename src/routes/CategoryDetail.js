import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPokemonsOfType } from '../redux/pokemonSlice';
import Header from '../components/Header';
import CategoryHeader from '../components/CategoryHeader';
import PokemonsPerCategory from '../components/PokemonsPerCategory';

const CategoryDetail = () => {
  const { typeId, typeName } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonsOfType(typeId));
  }, [dispatch, typeId]);
  return (
    <>
      <Header title={`Type: ${typeName}`} />
      <CategoryHeader name={typeName} />
      <PokemonsPerCategory />
    </>
  );
};

export default CategoryDetail;
