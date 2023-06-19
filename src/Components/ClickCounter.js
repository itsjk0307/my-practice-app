import React, { Component } from "react";
import UpdatedComponent from "../WithCounter";

class clickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incremenetCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    const { count, incremenetCount } = this.props;
    return (
      <div>
        <button onClick={incremenetCount}> Clicked {count} times</button>
      </div>
    );
  }
}

export default UpdatedComponent(clickCounter);
