// tslint:disable
// this is an auto generated file. This will be overwritten

export const deleteQuestion = `mutation DeleteQuestion($id: Int!) {
  deleteQuestion(id: $id) {
    id
    stem
    topic
    subTopic
    questionType
    questionOptions
    questionAnswers
    points
    explaination
    explainationUrl
    imageUrl
  }
}
`;
export const createQuestion = `mutation CreateQuestion($createQuestionInput: CreateQuestionInput!) {
  createQuestion(createQuestionInput: $createQuestionInput) {
    id
    stem
    topic
    subTopic
    questionType
    questionOptions
    questionAnswers
    points
    explaination
    explainationUrl
    imageUrl
  }
}
`;
export const batchCreateQuestion = `mutation BatchCreateQuestion($input: [CreateQuestionInput!]!) {
  batchCreateQuestion(input: $input) {
    id
    stem
    topic
    subTopic
    questionType
    questionOptions
    questionAnswers
    points
    explaination
    explainationUrl
    imageUrl
  }
}
`;
export const updateQuestion = `mutation UpdateQuestion($updateQuestionInput: UpdateQuestionInput!) {
  updateQuestion(updateQuestionInput: $updateQuestionInput) {
    id
    stem
    topic
    subTopic
    questionType
    questionOptions
    questionAnswers
    points
    explaination
    explainationUrl
    imageUrl
  }
}
`;
export const deleteQuestionTbl = `mutation DeleteQuestionTbl($id: Int!) {
  deleteQuestionTbl(id: $id) {
    id
    stem
    topic
    subTopic
    questionType
    questionOptions
    questionAnswers
    points
    explaination
    explainationUrl
    imageUrl
  }
}
`;
export const createQuestionTbl = `mutation CreateQuestionTbl($createQuestionTblInput: CreateQuestionTblInput!) {
  createQuestionTbl(createQuestionTblInput: $createQuestionTblInput) {
    id
    stem
    topic
    subTopic
    questionType
    questionOptions
    questionAnswers
    points
    explaination
    explainationUrl
    imageUrl
  }
}
`;
export const updateQuestionTbl = `mutation UpdateQuestionTbl($updateQuestionTblInput: UpdateQuestionTblInput!) {
  updateQuestionTbl(updateQuestionTblInput: $updateQuestionTblInput) {
    id
    stem
    topic
    subTopic
    questionType
    questionOptions
    questionAnswers
    points
    explaination
    explainationUrl
    imageUrl
  }
}
`;
