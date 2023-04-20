import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Category from '../components/Category';

test('test', async () => {
  render(
    <BrowserRouter>
      <Category
        name="normal"
        to="/someUrl"
        url="https://pokeapi.co/api/v2/type/3/"
        color="dark"
      />
    </BrowserRouter>,

  );
  const text = await screen.findByText('3');
  expect(text).toBeInTheDocument();
});
