import { BrowserRouter, useParams } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import CategoryHeader from '../components/CategoryHeader';

describe('Category Header', () => {
  test('Test if useParams is correctly mocked', () => {
    expect(jest.isMockFunction(useParams)).toBe(true);
    expect(jest.isMockFunction(BrowserRouter)).toBe(false);
  });
  test('Displays the correct number', async () => {
    useParams.mockReturnValue({ typeId: 3 });
    render(
      <BrowserRouter>
        <CategoryHeader name="test" />
      </BrowserRouter>,
    );
    const number = await screen.findByText('3 Pokémons');
    expect(number).toBeInTheDocument();
  });
});
