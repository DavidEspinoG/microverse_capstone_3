import filterState from "../components/FilterState";

const mockState = [
  {
    name: 'normal',
    url: 'https://pokeapi.co/api/v2/type/1/'
  },
  {
    name: 'fighting',
    url: 'https://pokeapi.co/api/v2/type/2/'
  },
  {
    name: 'flying',
    url: 'https://pokeapi.co/api/v2/type/3/'
  },
  {
    name: 'poison',
    url: 'https://pokeapi.co/api/v2/type/4/'
  },
  {
    name: 'ground',
    url: 'https://pokeapi.co/api/v2/type/5/'
  }
]

test('The function returns the same state', () => {
  expect(filterState('', mockState)).toBe(mockState);
});


test('The function returns only one element', () => {
  const expected = [
    {
      name: 'normal',
      url: 'https://pokeapi.co/api/v2/type/1/'
    },
  ]
  expect(filterState('normal', mockState)).toStrictEqual(expected);
});

test('The function returns only one element', () => {
  const expected = [
    {
      name: 'normal',
      url: 'https://pokeapi.co/api/v2/type/1/'
    },
    {
      name: 'poison',
      url: 'https://pokeapi.co/api/v2/type/4/'
    },
    {
      name: 'ground',
      url: 'https://pokeapi.co/api/v2/type/5/'
    }
  ]
  expect(filterState('o', mockState)).toStrictEqual(expected);
});