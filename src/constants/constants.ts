import { QuestionListTemplateType, QuestionNameType } from "@/store/question/type";

export const QUESTION_TYPE_LIST = ["SHORT", "LONG", "MULTIPLE", "CHECKBOX"] as const;

export const QUESTION_LIST_TEMPLATE: QuestionListTemplateType = {
  CHECKBOX: {
    id: "CHECKBOX1",
    type: "CHECKBOX",
    questionText: "질문",
    required: false,
    answer: "",
    selectedOptionId: [],
    options: [{ id: "CHECKBOX1OPTION1", text: "옵션 1" }]
  },
  MULTIPLE: {
    id: "MULTIPLE1",
    type: "MULTIPLE",
    questionText: "질문",
    required: false,
    answer: "",
    selectedOptionId: [],
    options: [{ id: "MULTIPLE1OPTION1", text: "옵션 1" }]
  },
  SHORT: {
    id: "SHORT1",
    type: "SHORT",
    questionText: "질문",
    answer: "",
    selectedOptionId: [],
    required: false
  },
  LONG: {
    id: "LONG1",
    type: "LONG",
    questionText: "질문",
    answer: "",
    selectedOptionId: [],
    required: false
  }
};

export const QUESTION_TYPE_LIST_TEXT: { [type in QuestionNameType]: string } = {
  CHECKBOX: "체크박스",
  LONG: "장문형",
  SHORT: "단답형",
  MULTIPLE: "객관식 질문"
};
