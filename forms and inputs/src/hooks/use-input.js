import { useState } from "react";
const useInput = (validationLogic) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueTouched, setValueTouched] = useState(false);

  const valueIsValid = validationLogic(enteredValue);
  const hasError = !valueIsValid && valueTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const valueInputBlurhandler = (event) => {
    setValueTouched(true);
  };

  const reset = () =>{
      setEnteredValue("");
      setValueTouched(false);
  }

  return {
    isValid: valueIsValid,
    value: enteredValue,
    hasError,
    valueChangeHandler,
    valueInputBlurhandler,
    reset
  };
};
export default useInput;
