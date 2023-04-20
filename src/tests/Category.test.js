import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Category from '../components/Category';
import store from '../redux/store';

describe('Category', () => {
  test('The correct number appears', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Category
            name="normal"
            to="/someUrl"
            url="https://pokeapi.co/api/v2/type/3/"
            color="dark"
          />
        </BrowserRouter>
      </Provider>,
    );
    const text = await screen.findByText('3');
    expect(text).toBeInTheDocument();
  });
});
