import React from "react";
import "./App.css";
import ClickCounterTwo from "./Components/ClickCounterTwo";
import HoverCounterTwo from "./Components/HoverCountTwo";
// import User from "./Components/User";
import CounterTwo from "./Components/CounterTwo";
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <CounterTwo
          render={(count, incrementCount) => (
            <ClickCounterTwo
              count={count}
              incrementCount={incrementCount}
            ></ClickCounterTwo>
          )}
        />
        <CounterTwo
          render={(count, incrementCount) => (
            <HoverCounterTwo
              count={count}
              incrementCount={incrementCount}
            ></HoverCounterTwo>
          )}
        />

        {/* <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={(isLoggedIn) => (isLoggedIn ? "Jamshid" : "Guest")} /> */}
      </div>
    );
  }
}

export default App;
