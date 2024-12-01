import { atom } from "recoil";

import { QuestionType } from "./type";

export const initialQuestionState: QuestionType = {
  title: "제목 없는 설문지",
  id: "TITLE",
  description: "",
  questionList: []
};

export const questionState = atom<QuestionType>({
  key: "question",
  default: initialQuestionState
});
