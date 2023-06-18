import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jamshid",
    };
    console.log("LifecycleB constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromPorps");
    return null;
  }
  componentDidMount() {
    console.log("Lifecycle B DidMounts");
  }
  shouldComponentUpdate() {
    console.log(" LifecycleB shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("LifeCylceB getSnapshotBeforeUpdate");
  }
  componentDidUpdate() {
    console.log("LifeCylceB componentDidUpdate");
  }

  render() {
    console.log("LifecycleB render");
    return (
      <div>
        <div>Lifecycle B</div>
      </div>
    );
  }
}

export default LifeCycleB;
