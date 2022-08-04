import { useRef, useState, useEffect } from "react";

const SimpleInput = (props) => {
  // useState can be used when we need to check the value on submit
  const nameInputRef = useRef();
  // useState can be used when we need to check the value on every keystroke
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  useEffect(() => {
    if (isNameValid) {
      console.log("Name input is valid");
    }
  }, [isNameValid]);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setIsSubmited(true);

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

  const isInvalid = !isNameValid && isSubmited;
  const nameInputClasses = isInvalid
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
          value={name}
        />
      </div>
      {isInvalid && <p className="error-text">Name must not be empty.</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
