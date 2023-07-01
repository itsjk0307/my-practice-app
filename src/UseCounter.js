import { useState } from "react";

function UseCounter() {
  const [count, setCount] = useState(0);
  const incCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return [count, incCount, decCount, reset];
}

export default UseCounter;
