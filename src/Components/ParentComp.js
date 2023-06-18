import React, { Component } from "react";
// import RegularComp from "./RegularComp";
// import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jamshid ",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Jamshid",
      });
    }, 2000);
  }
  render() {
    console.log(
      "*************** Parent Component Render**************************"
    );
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComp;
