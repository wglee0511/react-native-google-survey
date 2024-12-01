import { useSetRecoilState } from "recoil";

import { formState } from "@/store/form/atom";

const useOnFocusQuestion = (id: string) => {
  const setForm = useSetRecoilState(formState);
  const onFocusContainer = () => {
    setForm({ focusId: id });
  };

  return { onFocusContainer };
};

export default useOnFocusQuestion;
