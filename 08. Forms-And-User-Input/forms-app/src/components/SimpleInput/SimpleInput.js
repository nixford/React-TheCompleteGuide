import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // useState can be used when we need to check the value on submit
  const nameInputRef = useRef();
  // useState can be used when we need to check the value on every keystroke
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setIsNameValid(false);
      return;
    }

    setIsNameValid(true);

    // console.log("name: ", name);
    // console.log("nameInputRef.current.value: ", nameInputRef.current.value);

    // nameInputRef.current.value = ""; => not good practise to directply clead inpuit value
    setName("");
  };

  const nameInputClasses = isNameValid
    ? "form-control"
    : "form-control invalid input";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameHandler}
          value={name}
        />
      </div>
      {!isNameValid && <p className="error-text">Name must not be empty.</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
