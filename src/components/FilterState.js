const filterState = (str, state) => {
  if (str === '') {
    return state;
  }
  const filteredState = state.filter((element) => element.name.includes(str));
  return filteredState;
};

export default filterState;
