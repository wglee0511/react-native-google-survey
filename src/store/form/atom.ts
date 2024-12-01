import { atom } from "recoil";

import { FormType } from "./type";

export const initialFormState: FormType = {
  focusId: ""
};

export const formState = atom<FormType>({
  key: "form",
  default: initialFormState
});
