import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import QuestionsList from '../QuestionsList';


describe('Question List Component', () => {
  
  it('displays all questions', async () => {
    render(<QuestionsList />);
    const buttonElement = screen.getByText(/More Answered Questions/i);
    console.log('button: ', buttonElement)
    expect(buttonElement).toBeInTheDocument();
  });

  it('true is truthy', () => {
    expect(true).toBe(true);
  });
 
  it('false is falsy', () => {
    expect(false).toBe(false);
  });

})