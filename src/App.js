import React from "react";
import "./App.css";
import IntervalHookCounter from "./Components/IntervalHookCounter";
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <IntervalHookCounter />
      </div>
    );
  }
}

export default App;
