// tslint:disable
// this is an auto generated file. This will be overwritten

export const getQuestion = `query GetQuestion($id: Int!) {
  getQuestion(id: $id) {
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
export const listQuestions = `query ListQuestions {
  listQuestions {
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
export const getQuestionTbl = `query GetQuestionTbl($id: Int!) {
  getQuestionTbl(id: $id) {
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
export const listQuestionTbls = `query ListQuestionTbls {
  listQuestionTbls {
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
