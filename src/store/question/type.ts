import { QUESTION_TYPE_LIST } from "@/constants/constants";

export type QuestionNameType = (typeof QUESTION_TYPE_LIST)[number];

export type QuestionOptionType = { id: string; text: string };

export type CommonQuestionListType = {
  id: string;
  questionText: string;
  type: QuestionNameType;
  required: boolean;
  answer: string;
  selectedOptionId: string[];
  options?: QuestionOptionType[];
};

export type QuestionListType = CommonQuestionListType;

export type QuestionType = {
  id: string;
  title: string;
  description: string;
  questionList: QuestionListType[];
};

export type QuestionListTemplateType = {
  [name in QuestionNameType]: QuestionListType;
};
