/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateQuestionInput = {
  id?: number | null,
  stem?: string | null,
  topic?: string | null,
  subTopic?: string | null,
  questionType?: string | null,
  questionOptions?: string | null,
  questionAnswers?: string | null,
  points?: number | null,
  explaination?: string | null,
  explainationUrl?: string | null,
  imageUrl?: string | null,
};

export type UpdateQuestionInput = {
  id: number,
  stem?: string | null,
  topic?: string | null,
  subTopic?: string | null,
  questionType?: string | null,
  questionOptions?: string | null,
  questionAnswers?: string | null,
  points?: number | null,
  explaination?: string | null,
  explainationUrl?: string | null,
  imageUrl?: string | null,
};

export type CreateQuestionTblInput = {
  id?: number | null,
  stem?: string | null,
  topic?: string | null,
  subTopic?: string | null,
  questionType?: string | null,
  questionOptions?: string | null,
  questionAnswers?: string | null,
  points?: number | null,
  explaination?: string | null,
  explainationUrl?: string | null,
  imageUrl?: string | null,
};

export type UpdateQuestionTblInput = {
  id: number,
  stem?: string | null,
  topic?: string | null,
  subTopic?: string | null,
  questionType?: string | null,
  questionOptions?: string | null,
  questionAnswers?: string | null,
  points?: number | null,
  explaination?: string | null,
  explainationUrl?: string | null,
  imageUrl?: string | null,
};

export type DeleteQuestionMutationVariables = {
  id: number,
};

export type DeleteQuestionMutation = {
  deleteQuestion:  {
    __typename: "Question",
    id: number | null,
    stem: string | null,
    topic: string | null,
    subTopic: string | null,
    questionType: string | null,
    questionOptions: string | null,
    questionAnswers: string | null,
    points: number | null,
    explaination: string | null,
    explainationUrl: string | null,
    imageUrl: string | null,
  } | null,
};

export type CreateQuestionMutationVariables = {
  createQuestionInput: CreateQuestionInput,
};

export type CreateQuestionMutation = {
  createQuestion:  {
    __typename: "Question",
    id: number | null,
    stem: string | null,
    topic: string | null,
    subTopic: string | null,
    questionType: string | null,
    questionOptions: string | null,
    questionAnswers: string | null,
    points: number | null,
    explaination: string | null,
    explainationUrl: string | null,
    imageUrl: string | null,
  } | null,
};

export type BatchCreateQuestionMutationVariables = {
  input: Array< CreateQuestionInput >,
};

export type BatchCreateQuestionMutation = {
  batchCreateQuestion:  Array< {
    __typename: "Question",
    id: number | null,
    stem: string | null,
    topic: string | null,
    subTopic: string | null,
    questionType: string | null,
    questionOptions: string | null,
    questionAnswers: string | null,
    points: number | null,
    explaination: string | null,
    explainationUrl: string | null,
    imageUrl: string | null,
  } | null > | null,
};

export type UpdateQuestionMutationVariables = {
  updateQuestionInput: UpdateQuestionInput,
};

export type UpdateQuestionMutation = {
  updateQuestion:  {
    __typename: "Question",
    id: number | null,
    stem: string | null,
    topic: string | null,
    subTopic: string | null,
    questionType: string | null,
    questionOptions: string | null,
    questionAnswers: string | null,
    points: number | null,
    explaination: string | null,
    explainationUrl: string | null,
    imageUrl: string | null,
  } | null,
};

export type DeleteQuestionTblMutationVariables = {
  id: number,
};

export type DeleteQuestionTblMutation = {
  deleteQuestionTbl:  {
    __typename: "QuestionTbl",
    id: number,
    stem: string | null,
    topic: string | null,
    subTopic: string | null,
    questionType: string | null,
    questionOptions: string | null,
    questionAnswers: string | null,
    points: number | null,
    explaination: string | null,
    explainationUrl: string | null,
    imageUrl: string | null,
  } | null,
};

export type CreateQuestionTblMutationVariables = {
  createQuestionTblInput: CreateQuestionTblInput,
};

export type CreateQuestionTblMutation = {
  createQuestionTbl:  {
    __typename: "QuestionTbl",
    id: number,
    stem: string | null,
    topic: string | null,
    subTopic: string | null,
    questionType: string | null,
    questionOptions: string | null,
    questionAnswers: string | null,
    points: number | null,
    explaination: string | null,
    explainationUrl: string | null,
    imageUrl: string | null,
  } | null,
};

export type UpdateQuestionTblMutationVariables = {
  updateQuestionTblInput: UpdateQuestionTblInput,
};

export type UpdateQuestionTblMutation = {
  updateQuestionTbl:  {
    __typename: "QuestionTbl",
    id: number,
    stem: string | null,
    topic: string | null,
    subTopic: string | null,
    questionType: string | null,
    questionOptions: string | null,
    questionAnswers: string | null,
    points: number | null,
    explaination: string | null,
    explainationUrl: string | null,
    imageUrl: string | null,
  } | null,
};

export type GetQuestionQueryVariables = {
  id: number,
};

export type GetQuestionQuery = {
  getQuestion:  {
    __typename: "Question",
    id: number | null,
    stem: string | null,
    topic: string | null,
    subTopic: string | null,
    questionType: string | null,
    questionOptions: string | null,
    questionAnswers: string | null,
    points: number | null,
    explaination: string | null,
    explainationUrl: string | null,
    imageUrl: string | null,
  } | null,
};

export type ListQuestionsQuery = {
  listQuestions:  Array< {
    __typename: "Question",
    id: number | null,
    stem: string | null,
    topic: string | null,
    subTopic: string | null,
    questionType: string | null,
    questionOptions: string | null,
    questionAnswers: string | null,
    points: number | null,
    explaination: string | null,
    explainationUrl: string | null,
    imageUrl: string | null,
  } | null > | null,
};

export type GetQuestionTblQueryVariables = {
  id: number,
};

export type GetQuestionTblQuery = {
  getQuestionTbl:  {
    __typename: "QuestionTbl",
    id: number,
    stem: string | null,
    topic: string | null,
    subTopic: string | null,
    questionType: string | null,
    questionOptions: string | null,
    questionAnswers: string | null,
    points: number | null,
    explaination: string | null,
    explainationUrl: string | null,
    imageUrl: string | null,
  } | null,
};

export type ListQuestionTblsQuery = {
  listQuestionTbls:  Array< {
    __typename: "QuestionTbl",
    id: number,
    stem: string | null,
    topic: string | null,
    subTopic: string | null,
    questionType: string | null,
    questionOptions: string | null,
    questionAnswers: string | null,
    points: number | null,
    explaination: string | null,
    explainationUrl: string | null,
    imageUrl: string | null,
  } | null > | null,
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion:  {
    __typename: "Question",
    id: number | null,
    stem: string | null,
    topic: string | null,
    subTopic: string | null,
    questionType: string | null,
    questionOptions: string | null,
    questionAnswers: string | null,
    points: number | null,
    explaination: string | null,
    explainationUrl: string | null,
    imageUrl: string | null,
  } | null,
};

export type OnCreateQuestionTblSubscription = {
  onCreateQuestionTbl:  {
    __typename: "QuestionTbl",
    id: number,
    stem: string | null,
    topic: string | null,
    subTopic: string | null,
    questionType: string | null,
    questionOptions: string | null,
    questionAnswers: string | null,
    points: number | null,
    explaination: string | null,
    explainationUrl: string | null,
    imageUrl: string | null,
  } | null,
};
