const CategoryDetailClasses = (num) => {
  const classes = [];
  const dark = 'pokemon-of-category-dark';
  const light = 'pokemon-of-category-light';
  for (let i = 0; i < num; i += 1) {
    if (i % 2 === 0) {
      classes.push(dark);
    } else {
      classes.push(light);
    }
  }
  return classes;
};

export default CategoryDetailClasses;
