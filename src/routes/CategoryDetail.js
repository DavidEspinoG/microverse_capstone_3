import { useParams, NavLink } from 'react-router-dom';
// import { useEffect } from 'react';
const CategoryDetail = () => {
  const { categoryId } = useParams();

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     cons
  //   }
  // }, [])
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
