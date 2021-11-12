/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../app/App';
import Question from '../Question';
import Answer from '../Answer';
import { act } from 'react-dom/test-utils';

const currentProduct = {
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

const mockAnswer = mockQuestion.answers['5087405'];

describe('Question List Component', () => {
  it('displays submit question button on load before API call', async () => {
    await act(async () => {
      await render(<App />);
    });
    const buttonElement = screen.getByText(/Submit A Question/i);
    expect(buttonElement).toBeInTheDocument();
  });

  // it('displays add question button after api call', async () => {
  //   await act(async () => {
  //     await render(<App />);
  //   });
  //   const buttonElement = await screen.findByText(/more answered questions/i, null, { timeout: 5000 });
  //   expect(buttonElement).toBeInTheDocument();
  // });
});

describe('Question Component Tests', () => {
  beforeEach(() => {
    render(<Question question={mockQuestion} helpfulness={mockQuestion.question_helpfulness} />);
  });

  it('displays a question', () => {
    const questionEl = screen.getByText(/Blue steel lookin good\?/i);
    expect(questionEl).toBeInTheDocument();
  });

  it('does not display \'more answered questions\' for only one question', () => {
    const moreAnswersEl = screen.queryByText(/more answered questions/i);
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
    await fireEvent.click(yesButton);
    const newVoteCount = await screen.findByText(('(350)'));
    expect(newVoteCount).toBeInTheDocument();
  });

  it('\'add answer\' button exists', () => {
    const answerButton = screen.getByText(/add answer/i);
    expect(answerButton).toBeInTheDocument();
  });

  // it('add answer button pops up an answer form', async () => {
  //   const answerButton = screen.getByText(/add answer/i);
  //   fireEvent.click(answerButton);
  //   const formEl = await screen.findByText(/submit your answer/i);
  //   expect(formEl).toBeInTheDocument();
  // });
});

describe('answer component tests', () => {
  beforeEach(() => {
    render(
      <Answer answer={mockAnswer} key={mockAnswer.id} helpfulness={mockAnswer.helpfulness} />
    );
  });

  it('displays answer', () => {
    const answerEl = screen.getByText(/they are!/i);
    expect(answerEl).toBeInTheDocument();
  });

  it('does not display \'show more answers\' for only one answer', () => {
    const moreAnswersEl = screen.queryByText(/show more answers/i);
    expect(moreAnswersEl).toBeNull();
  });

  it('displays a yes button', () => {
    const yesButton = screen.getByTestId(1234);
    expect(yesButton).toBeInTheDocument();
  });

  it('displays vote count', () => {
    const voteCount = screen.getByText('(2)');
    expect(voteCount).toBeInTheDocument();
  });

  it('yes click increases vote count by 1', async () => {
    const yesButton = screen.getByTestId(1234);
    await fireEvent.click(yesButton);
    const newVoteCount = await screen.findByText(('(3)'));
    expect(newVoteCount).toBeInTheDocument();
  });
});
