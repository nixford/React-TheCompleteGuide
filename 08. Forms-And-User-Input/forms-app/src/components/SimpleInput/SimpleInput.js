import { useState } from "react";

// import useInput from "../../hooks/use-input";

// VALIDATION CONDITIONS - NAME: name.trim() !== "", EMAIL: email.includes("@") && email.trim().length > 0
const SimpleInput = (props) => {
  // OPTION 1 - VALIDATION WITH useState
  // useState can be used when we need to check the value on submit
  // const nameInputRef = useRef();
  // useState can be used when we need to check the value on every keystroke

  const [name, setName] = useState("");
  const [isNameInputTached, setIsNameInputTached] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailInputTached, setIsEmailInputTached] = useState(false);

  const isNameValid = name.trim() !== "";
  const isNameInputINvalid = !isNameValid && isNameInputTached;
  const isEmailValid = email.includes("@") && email.trim().length > 0;
  const isEmailInputINvalid = !isEmailValid && isEmailInputTached;

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  // Validation on losing focus
  const blurNameHandler = () => {
    setIsNameInputTached(true);
  };

  // Validation on losing focus
  const blurEmailHandler = () => {
    setIsEmailInputTached(true);
  };

  //__
  // OPTION 2 - VALIDATION WITH custom hooks:
  // const {
  //   value: name,
  //   isValid: isNameValid,
  //   hasError: isNameInputINvalid,
  //   valueChangeHandler: nameHandler,
  //   inputBlurHandler: blurNameHandler,
  //   reset: resetNameInput,
  // } = useInput((value) => value.trim() !== "");

  // const {
  //   value: email,
  //   isValid: isEmailValid,
  //   hasError: isEmailInputINvalid,
  //   valueChangeHandler: emailHandler,
  //   inputBlurHandler: blurEmailHandler,
  //   reset: resetEmailInput,
  // } = useInput((value) => value.includes("@") && value.trim().length > 0);

  const submitHandler = (e) => {
    e.preventDefault();
    // setIsNameInputTached(true);
    // setIsEmailInputTached(true);
    if (!isNameValid) {
      return;
    }
    // setName("");
    // setEmail("");
    // setIsNameInputTached(false);
    // setIsEmailInputTached(false);
  };

  const nameInputClasses = isNameInputINvalid
    ? "form-control invalid input"
    : "form-control";

  const emailInputClasses = isEmailInputINvalid
    ? "form-control invalid input"
    : "form-control";

  const isFormValid = isNameValid && isEmailValid;

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameHandler}
          onBlur={blurNameHandler}
          value={name}
        />
      </div>
      {isNameInputINvalid && (
        <p className="error-text">Name must not be empty.</p>
      )}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your email</label>
        <input
          type="text"
          id="email"
          onChange={emailHandler}
          onBlur={blurEmailHandler}
          value={email}
        />
      </div>
      {isEmailInputINvalid && (
        <p className="error-text">Email must contain "@".</p>
      )}
      <div className="form-actions">
        <button
          className={`${!isFormValid ? "button-inactive" : ""}`}
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
