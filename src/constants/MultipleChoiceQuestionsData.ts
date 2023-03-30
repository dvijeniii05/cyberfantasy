export interface AnswerType {
  id: number;
  value: string;
}
export interface QuestionType {
  id: number;
  question: string;
  answers: Array<AnswerType>;
}

export const MultipleChoiceQuestionsData: Array<QuestionType> = [
  {
    id: 0,
    question: 'How does your skin feel after a facewash?',
    answers: [
      {
        id: 1,
        value:
          'It feels tight. Actually my skin feels tight at all times, not only after a facewash.',
      },
      {id: 2, value: 'Has a slight shine'},
      {
        id: 3,
        value: 'Shines in the T-Zone but becomes smooth and matte on my cheeks',
      },
      {id: 4, value: 'It feels greats. Looks clean and healthy'},
    ],
  },
  {
    id: 1,
    question: '',
    answers: [
      {id: 1, value: 'A'},
      {id: 2, value: 'B'},
      {id: 3, value: 'C'},
      {id: 4, value: 'D'},
    ],
  },
  {
    id: 2,
    question: 'Question 3',
    answers: [
      {id: 1, value: 'A'},
      {id: 2, value: 'B'},
      {id: 3, value: 'C'},
      {id: 4, value: 'D'},
    ],
  },
  {
    id: 3,
    question: 'Question 4',
    answers: [
      {id: 1, value: 'A'},
      {id: 2, value: 'B'},
      {id: 3, value: 'C'},
      {id: 4, value: 'D'},
    ],
  },
];
