import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  test('Shows the correct title', () => {
    render(
      <BrowserRouter>
        <Header title="test title" />
      </BrowserRouter>,
    );
    const title = screen.getByText('test title');
    expect(title).toBeInTheDocument();
  });
});
