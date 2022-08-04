import { useState, useEffect } from "react";

// the name must start with "use":
const useCounter = (isForwards) => {
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
  }, []);

  return counter;
};

export default useCounter;