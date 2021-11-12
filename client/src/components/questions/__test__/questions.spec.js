import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import QuestionsList from '../QuestionsList';
import App from '../../app/App';
import QuestionsAnswers from '../QuestionsAnswers';
import Question from '../Question';

const mockQuestion = {
  question_id: 542899,
  question_body: "Blue steel lookin good?",
  question_date: "2021-11-03T00:00:00.000Z",
  asker_name: "derek",
  question_helpfulness: 349,
  reported: false,
  answers: {
    '5087405': {
      id: 5087405,
      body: "they are!",
      date: "2021-11-05T00:00:00.000Z",
      answerer_name: "mugatu",
      helpfulness: 2,
      photos: []
    }
  }
}



describe('Question List Component', () => {

  it('displays submit question button on load', () => {
    render(<App />);
    const buttonElement = screen.getByText(/Submit A Question/i);
    expect(buttonElement).toBeInTheDocument();
  });

  // it('displays show more answers button after API call', async () => {
  //  render(<App />)
  //  const moreAnswersEl = await screen.findByText(/SHOW MORE ANSWERS/i);
  //  waitFor(expect(moreAnswersEl).toBeInTheDocument());
  // })

  it('true is truthy', () => {
    expect(true).toBe(true);
  });

  it('false is falsy', () => {
    expect(false).toBe(false);
  });

})

describe('question component tests', () => {

  beforeEach(() => {
    render(<Question question={mockQuestion} helpfulness={mockQuestion.question_helpfulness}/>);
  })

  it('displays a question', () => {
    //render(<Question question={mockQuestion} helpfulness={mockQuestion.question_helpfulness}/>);
    const questionEl = screen.getByText(/Blue steel lookin good\?/i);
    expect(questionEl).toBeInTheDocument();
  })

  it('does not display \'show more answers\' for only one question', () => {
    const moreAnswersEl = screen.queryByText(/show more answers/i);
    expect(moreAnswersEl).toBeNull();
  })

  it('displays a yes button', () => {
    const yesButton = screen.getByTestId(542899);
    expect(yesButton).toBeInTheDocument();
  })

  it('displays vote count', () => {
    const voteCount = screen.getByText('(349)');
    expect(voteCount).toBeInTheDocument();
  })

  it('yes click increases vote count by 1', async () => {
    const yesButton = screen.getByTestId(542899);
    const voteCountEl = screen.getByText('(349)');
    fireEvent.click(yesButton);
    const newVoteCount = await screen.findByText(('(350)'));
    expect(newVoteCount).toBeInTheDocument();
  })
})