import React, { Component } from "react";
class UseGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn ? (
      <div>Welcome Jamshid</div>
    ) : (
      <div>Welcome Guest</div>
    );

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Jamshid</div>;
    // } else {
    //   message = <div>Welcome Guest </div>;
    // }
    // return <div>{message}</div>;

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Jamshid</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
  }
  //   return (
  //     <div>
  //       <div>Welcome Jamshid</div>;<div>Welcome Guest</div>;
  //     </div>
  //   );
}

export default UseGreeting;
