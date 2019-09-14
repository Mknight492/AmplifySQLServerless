/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateQuestionInput = {
  id?: number | null,
  stem?: string | null,
  topic?: Topic | null,
  subTopic?: SubTopic | null,
  questionType?: QuestionType | null,
  questionOptions?: string | null,
  questionAnswers?: string | null,
  points?: number | null,
  explaination?: string | null,
  explainationUrl?: string | null,
  imageUrl?: string | null,
};

export enum Topic {
  Anatomy = "Anatomy",
  Physiology = "Physiology",
  Pathology = "Pathology",
}


export enum SubTopic {
  Head = "Head",
  Neck = "Neck",
  Thorax = "Thorax",
  Abdomen = "Abdomen",
  Pelvis = "Pelvis",
  UpperLimb = "UpperLimb",
  LowerLimb = "LowerLimb",
  Back = "Back",
  EmbryologyAndHistopathology = "EmbryologyAndHistopathology",
  CellularPhysiology = "CellularPhysiology",
  NeuromuscularCNS = "NeuromuscularCNS",
  GastrointestinalPhysiology = "GastrointestinalPhysiology",
  HaematologyPhysiology = "HaematologyPhysiology",
  FluidAndElectrolytes = "FluidAndElectrolytes",
  CardiovascularPhysiology = "CardiovascularPhysiology",
  RespiratoryPhysiology = "RespiratoryPhysiology",
  Renal = "Renal",
  Metabolism = "Metabolism",
  EndocrinePhysiology = "EndocrinePhysiology",
  ThyroidPhysiology = "ThyroidPhysiology",
  TraumaAndClinical = "TraumaAndClinical",
  CellularPathology = "CellularPathology",
  Inflammation = "Inflammation",
  Infection = "Infection",
  AntibioticsAndPharmacology = "AntibioticsAndPharmacology",
  Immunology = "Immunology",
  Genetics = "Genetics",
  Neoplasia = "Neoplasia",
  SkinAndBone = "SkinAndBone",
  HaematologyPathology = "HaematologyPathology",
  CNS = "CNS",
  Breast = "Breast",
  CardiovascularPathology = "CardiovascularPathology",
  RespiratoryPathology = "RespiratoryPathology",
  GastrointestinalPathology = "GastrointestinalPathology",
  ThyroidPathology = "ThyroidPathology",
  EndocrinePathology = "EndocrinePathology",
  RenalUrologyGynaecology = "RenalUrologyGynaecology",
  Clinical = "Clinical",
  Statistics = "Statistics",
}


export enum QuestionType {
  MCQ = "MCQ",
  TF = "TF",
  SR = "SR",
}


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
