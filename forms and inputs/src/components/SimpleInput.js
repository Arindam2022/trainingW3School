import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    isValid: nameIsValid,
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler:nameChangeHandler,
    valueInputBlurhandler:nameBlurHandler,
    reset: resetName
  } = useInput(value=>value.trim() !== "");


  const {
    isValid: emailIsValid,
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler:emailChangeHandler,
    valueInputBlurhandler:emailBlurHandler,
    reset: resetEmail
  } = useInput(value=>value.includes("@"));

  // const [enteredName, setEnteredName] = useState("");
  // // const [nameIsValid, setNameIsValid] = useState(false);
  // const [nameTouched, setNameTouched] = useState(false);
  // // const [formIsValid,setFormIsValid]= useState(false);

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailTouched, setEmailTouched] = useState(false);

  // const nameIsValid = enteredName.trim() !== "";
  // const nameInputInvalid = !nameIsValid && nameTouched;

  // const emailIsValid = enteredEmail.includes("@");
  // const emailInputInvalid = !emailIsValid && emailTouched;

  const formIsValid = nameIsValid && emailIsValid;

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const emailChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };
  // const emailInputBlurhandler = (event) => {
  //   setEmailTouched(true);
  // };

  // const nameInputBlurhandler = (event) => {
  //   setNameTouched(true);
  // };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(enteredName, enteredEmail);
    resetName();
    resetEmail();
  };

  const css = !nameInputHasError ? "form-control" : "form-control invalid";
  const css1 = !emailInputHasError ? "form-control" : "form-control invalid";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={css}>
        <label htmlFor="name">Your Name</label>
        <input
          autoComplete="off"
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Please enter somthing.</p>
        )}
      </div>
      <div className={css1}>
        <label htmlFor="email">Your Email</label>
        <input
          autoComplete="off"
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter vaild E-mail.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
