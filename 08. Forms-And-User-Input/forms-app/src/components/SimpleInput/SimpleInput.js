import { useRef, useState } from "react";

// VALIDATION CONDITION - THE INPUT FIELD MUST NOT BE EMPTY
const SimpleInput = (props) => {
  // OPTION 1 - useState can be used when we need to check the value on submit
  const nameInputRef = useRef();
  // OPTION 2 - useState can be used when we need to check the value on every keystroke
  const [name, setName] = useState("");
  const [isInputTached, setIsInputTached] = useState(false);

  const isNameValid = name.trim() !== "";
  const isInputINvalid = !isNameValid && isInputTached;

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  // Validation on losing focus
  const blurHandler = (e) => {
    setIsInputTached(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsInputTached(true);
    if (!isNameValid) {
      return;
    }
    setName("");
    setIsInputTached(false);
  };

  const nameInputClasses = isInputINvalid
    ? "form-control invalid input"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameHandler}
          onBlur={blurHandler}
          value={name}
        />
      </div>
      {isInputINvalid && <p className="error-text">Name must not be empty.</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
