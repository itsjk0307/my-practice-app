import React from "react";
import UseCounter from "../../UseCounter";

function CounterOne() {
  const [count, incCount, decCount, reset] = UseCounter();
  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={incCount}>Increment</button>
      <button onClick={decCount}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterOne;
