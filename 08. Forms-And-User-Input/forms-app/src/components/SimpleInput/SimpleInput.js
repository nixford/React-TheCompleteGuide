import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // useState can be used when we need to check the value on submit
  const nameInputRef = useRef();

  // useState can be used when we need to check the value on every keystroke
  const [name, setName] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("name: ", name);
    console.log("nameInputRef.current.value: ", nameInputRef.current.value);

    // nameInputRef.current.value = ""; => not good practise to directply clead inpuit value
    setName("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameHandler}
          value={name}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
