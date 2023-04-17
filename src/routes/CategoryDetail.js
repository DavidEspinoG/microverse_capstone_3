import { useParams, NavLink } from 'react-router-dom';

const CategoryDetail = () => {
  const { categoryId } = useParams();
  return (
    <>
      <p>
        Category id:
        {categoryId}
      </p>
      <NavLink to="/pokemon/1">Pokemon detail</NavLink>
      <p>
        List of pokemons of category:
        {categoryId}
      </p>
    </>
  );
};

export default CategoryDetail;
