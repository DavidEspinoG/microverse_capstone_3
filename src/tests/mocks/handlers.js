import { rest } from 'msw';

// const mockData = [
//   {
//     name: 'normal',
//     url: 'https://pokeapi.co/api/v2/type/1/',
//   },
//   {
//     name: 'fighting',
//     url: 'https://pokeapi.co/api/v2/type/2/',
//   },
//   {
//     name: 'flying',
//     url: 'https://pokeapi.co/api/v2/type/3/',
//   },
// ];

const handlers = [
  rest.get('https://pokeapi.co/api/v2/type/3/', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      pokemon: [{}, {}, {}],
    }),
  )),
];

export default handlers;
