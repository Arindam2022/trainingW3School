import useInput from "../hooks/use-input";

const notEmpty = (value) => value.trim() !== "";
const valEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    
    isValid: firstnameIsValid,
    value: enteredFirstName,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueInputBlurhandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(notEmpty);
  const {
    isValid: lastnameIsValid,
    value: enteredLastName,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueInputBlurhandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(notEmpty);
  const {
    isValid: emailIsValid,
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueInputBlurhandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(valEmail);

  const formIsValid = firstnameIsValid && lastnameIsValid && emailIsValid;

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredFirstName, enteredLastName, enteredEmail);
    resetFirstName();
    resetLastName();
    resetEmail();
  };
  const css1 = !firstNameInputHasError
    ? "form-control"
    : "form-control invalid";
  const css2 = !lastNameInputHasError ? "form-control" : "form-control invalid";
  const css3 = !emailInputHasError ? "form-control" : "form-control invalid";
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={css1}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            autoComplete="off"
          />
          {firstNameInputHasError && <p>Please Enter First Name.</p>}
        </div>
        <div className={css2}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            autoComplete="off"
          />
          {lastNameInputHasError && <p>Please Enter Last Name.</p>}
        </div>
      </div>
      <div className={css3}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          autoComplete="off"
        />
        {emailInputHasError && <p>Please Enter Email Address.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
