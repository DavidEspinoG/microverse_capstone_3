import { render, screen } from '@testing-library/react';
import PokemonOfCategory from '../components/PokemonOfCategory';

describe('PokemonOfCategory', () => {
  test('Shows the correct title', async () => {
    render(
      <PokemonOfCategory
        name="test"
        url="https://pokeapi.co/api/v2/pokemon/16/"
        cssClass="black"
      />,
    );
    const title = await screen.findByText('Power:50');
    expect(title).toBeInTheDocument();
  });
});
