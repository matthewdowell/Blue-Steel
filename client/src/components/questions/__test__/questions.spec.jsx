/* eslint-disable no-undef */
import React, { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionsList from '../QuestionsList';
import App from '../../app/App';
import QuestionsAnswers from '../QuestionsAnswers';
import Question from '../Question';
import { ProductContext } from '../../../context/globalContext';

const mockProduct = {
  campus: 'hr-den',
  category: 'Jackets',
  created_at: '2021-08-13T14:40:29.181Z',
  default_price: '140.00',
  description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest, surroundings.',
  id: 44388,
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  updated_at: '2021-08-13T14:40:29.181Z',
};

const mockQuestion = {
  question_id: 542899,
  question_body: 'Blue steel lookin good?',
  question_date: '2021-11-03T00:00:00.000Z',
  asker_name: 'derek',
  question_helpfulness: 349,
  reported: false,
  answers: {
    5087405: {
      id: 5087405,
      body: 'they are!',
      date: '2021-11-05T00:00:00.000Z',
      answerer_name: 'mugatu',
      helpfulness: 2,
      photos: [],
    },
  },
};

// jest.mock('react', () => {
//   // const react = jest.requireActual('react');

//   return {
//     // ...react,
//     useContext: jest.fn()
//   };
// });

xdescribe('Question List Component', () => {
  // it('displays submit question button on load', () => {
  //   render(<App />);
  //   const buttonElement = screen.getByText(/Submit A Question/i);
  //   expect(buttonElement).toBeInTheDocument();
  // });

  // it('displays show more answers button when given context', async () => {
  //   useContext.mockImplementation(() => ({ currentProduct: mockProduct }))
  //  render(
  //      <QuestionsAnswers />
  //  )
  //  const moreAnswersEl = await screen.findByText(/SHOW MORE ANSWERS/i);
  //  waitFor(expect(moreAnswersEl).toBeInTheDocument());
  // })

});

describe('question component tests', () => {
  beforeEach(() => {
    render(<Question question={mockQuestion} helpfulness={mockQuestion.question_helpfulness} />);
  });

  it('displays a question', () => {
    const questionEl = screen.getByText(/Blue steel lookin good\?/i);
    expect(questionEl).toBeInTheDocument();
  });

  it('does not display \'show more answers\' for only one question', () => {
    const moreAnswersEl = screen.queryByText(/show more answers/i);
    expect(moreAnswersEl).toBeNull();
  });

  it('displays a yes button', () => {
    const yesButton = screen.getByTestId(542899);
    expect(yesButton).toBeInTheDocument();
  });

  it('displays vote count', () => {
    const voteCount = screen.getByText('(349)');
    expect(voteCount).toBeInTheDocument();
  });

  it('yes click increases vote count by 1', async () => {
    const yesButton = screen.getByTestId(542899);
    const voteCountEl = screen.getByText('(349)');
    fireEvent.click(yesButton);
    const newVoteCount = await screen.findByText(('(350)'));
    expect(newVoteCount).toBeInTheDocument();
  });
});
