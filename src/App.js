import React, { createContext, useReducer } from "react";
import "./App.css";
import ComponentA from "./Components/ReducerHook/ComponentA";
import ComponentB from "./Components/ReducerHook/ComponentB";
import ComponentC from "./Components/ReducerHook/ComponentC";

export const createContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="app">
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div>Count-{count}</div>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default App;
