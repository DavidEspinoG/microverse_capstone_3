import { render, screen } from '@testing-library/react';
import Category from '../components/Category';
import { BrowserRouter } from 'react-router-dom';
import routesConfig from '../utils/routesConfig';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
// import store from '../redux/store'; 

const mockStore = configureStore([]);

describe('Category', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      types: [],
      pokemonsOfType: [],
      pokemonDetailed: [],
      loading: false,
      error: false,
      search: '',
      filtered: [],
    });
  });
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
      </Provider>
    );
    const text = await screen.findByText('3');
    expect(text).toBeInTheDocument();
  });

})


