import React, { Component } from "react";

class PureComp extends Component {
  render() {
    console.log("Pure Component Render");
    return <div>i am Pure Component {this.props.name}</div>;
  }
}

export default PureComp;
