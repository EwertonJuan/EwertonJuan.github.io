import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import { render } from '@testing-library/react';

export function renderWithMemoryRouter(component, initralEntry) {
  let testHistory, testLocation;
  return {
      ...render(
      <MemoryRouter initialEntries={[initralEntry]}>
          {component}
          <Route
          path="*"
          render={({ history, location }) => {
              testHistory = history;
              testLocation = location;
              return null;
          }}
          />
      </MemoryRouter>
      ),
    testHistory,
    testLocation
  }
}