import { useState, useEffect } from "react";

// the name must start with "use":
const useCounter = (isForwards) => {
  // the custom hook's parameter may be also a function -> more flexible approach
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isForwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isForwards]); // the custom hook's parameter needs to be added as dependancy in order the useEffect to re-run when it is changed

  return counter;
};

export default useCounter;
