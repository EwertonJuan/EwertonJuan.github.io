import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from './helpers/renderWithRouter';
// import { renderWithMemoryRouter } from './helpers/renderWithMemoryRouter';

describe('Testa página Home', () => {
  it('verifica se há link para projetos', () => {
    const { history } = renderWithRouter(<App />);

    const projects = screen.getByTestId('btn-projects');
    userEvent.click(projects);

    expect(history.location.pathname).toBe('/projects');
  });

  it('verifica se há link para sobre', () => {
    const { history } = renderWithRouter(<App />);

    const about = screen.getByTestId('btn-about');
    userEvent.click(about);

    expect(history.location.pathname).toBe('/about');
  });

  // it('verifica se há link para projetos', () => {
  //   const { testLocation } = renderWithMemoryRouter(<App />, '/');

  //   const projects = screen.getByTestId('btn-projects');
  //   userEvent.click(projects);

  //   expect(testLocation.pathname).toBe("/projects");
  // });
});