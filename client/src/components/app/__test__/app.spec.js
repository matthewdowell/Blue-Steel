import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App.jsx';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';

<<<<<<< HEAD
it('finds cant turn left', async () => {
  render(<App />);
  const linkElement = screen.getByText(/Ratings & Reviews/i);
  expect(linkElement).toBeInTheDocument();
=======
// it('finds cant turn left', async () => {
//   render(<App />);
//   const linkElement = screen.getByText(/RatingsReviews/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('loads the component and indicates as such, then displays proper header', async () => {
  let component;

  await act(async () => {
    component = render(<App />);
    //expect(component.getByText('Loading')).toBeInTheDocument();
  });

  //const [header] = component.getAllByTestId('header');
  //expect(header.textContent).toBe("MEOWWALK");
>>>>>>> ebdf054082f339dc4d54612d1f54662076cd7443
});

