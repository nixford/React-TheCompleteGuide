import useCounter from "../../Hooks/use-counter";

import Card from "../Card/Card";

const ForwardCounter = () => {
  // The custom hook is executed separately in each component
  // In each component the custom hook receives its own state
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
