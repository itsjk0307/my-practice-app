import React from "react";
import "./App.css";
import HookCounterTree from "./Components/HookCounterTree";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <HookCounterTree />
      </div>
    );
  }
}

export default App;
