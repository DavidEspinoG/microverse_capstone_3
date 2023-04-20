const chessClasses = (num) => {
  const classes = ['light-category', 'dark-category'];
  const dark = 'dark-category';
  const light = 'light-category';
  let penultimate;
  let last;
  let newClass;

  for (let i = 0; i < num - 2; i += 1) {
    penultimate = classes[i];
    last = classes[i + 1];
    if (penultimate !== last && last === dark) {
      newClass = dark;
    } else if (penultimate !== last && last === light) {
      newClass = light;
    }
    if (penultimate === last && last === dark) {
      newClass = light;
    } else if (penultimate === last && last === light) {
      newClass = dark;
    }
    classes.push(newClass);
  }
  return classes;
};

export default chessClasses;
