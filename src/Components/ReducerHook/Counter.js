import React, { useState } from "react";

function Counter() {
  const [CounterOne, setCounterOne] = useState(0);
  const [CounterTwo, setCounterTwo] = useState(0);

  const incrementCountOne = () => {
    setCounterOne(CounterOne + 1);
  };
  const incrementCounterTwo = () => {
    setCounterTwo(CounterTwo + 1);
  };

  return (
    <div>
      <div>
        <button onClick={incrementCountOne}>Count one - {CounterOne}</button>
      </div>
      <div>
        <button onClick={incrementCounterTwo}>Count two - {CounterTwo}</button>
      </div>
    </div>
  );
}

export default Counter;
