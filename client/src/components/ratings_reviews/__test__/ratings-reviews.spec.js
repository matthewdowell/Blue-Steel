import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

it('finds cant turn left', async () => {
  render(<App />);
  const linkElement = screen.getByText(/RatingsReviews/i);
  expect(linkElement).toBeInTheDocument();
});