export interface AnswerType {
  id: number;
  question: string;
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
        question:
          'It feels tight. Actually my skin feels tight at all times, not only after a facewash.',
        value: 'A',
      },
      {id: 2, question: 'Has a slight shine', value: 'B'},
      {
        id: 3,
        question:
          'Shines in the T-Zone but becomes smooth and matte on my cheeks',
        value: 'C',
      },
      {id: 4, question: 'It feels greats. Looks clean and healthy', value: 'D'},
    ],
  },
  {
    id: 1,
    question: '',
    answers: [
      {id: 1, question: 'A1', value: 'A'},
      {id: 2, question: 'B1', value: 'B'},
      {id: 3, question: 'C1', value: 'C'},
      {id: 4, question: 'D1', value: 'D'},
    ],
  },
  {
    id: 2,
    question: 'Question 3',
    answers: [
      {id: 1, question: 'A2', value: 'A'},
      {id: 2, question: 'B2', value: 'B'},
      {id: 3, question: 'C2', value: 'C'},
      {id: 4, question: 'D2', value: 'D'},
    ],
  },
  {
    id: 3,
    question: 'Question 4',
    answers: [
      {id: 1, question: 'A3', value: 'A'},
      {id: 2, question: 'B3', value: 'B'},
      {id: 3, question: 'C3', value: 'C'},
      {id: 4, question: 'D3', value: 'D'},
    ],
  },
];
