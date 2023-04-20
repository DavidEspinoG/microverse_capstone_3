import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import { render, screen } from "@testing-library/react";

describe('Header', () => {
  test('Shows the correct title', () => {
    render(
      <BrowserRouter>
        <Header title="test title"/>
      </BrowserRouter>
    ) 
    const title = screen.getByText('test title');
    expect(title).toBeInTheDocument();
  }) 
})