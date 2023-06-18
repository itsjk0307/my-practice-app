import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCylceA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jamshid",
    };
    console.log("LifecycleA constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromPorps");
    return null;
  }
  componentDidMount() {
    console.log("Lifecycle A DidMounts");
  }
  shouldComponentUpdate() {
    console.log(" LifecycleA shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("LifeCylceA getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCylceA componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "State Changed",
    });
  };

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change state</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCylceA;
