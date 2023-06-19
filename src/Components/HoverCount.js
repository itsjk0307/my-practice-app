import React, { Component } from "react";
import UpdatedComponent from "../WithCounter";

class hoverCounter extends Component {
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
        <h2 onMouseOver={incremenetCount}>Clicked {count} times</h2>
      </div>
    );
  }
}

export default UpdatedComponent(hoverCounter);
