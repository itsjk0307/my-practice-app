// import React, { Component } from "react";

// class MemoComp extends Component {
//   render({ name }) {
//     console.log("Rendering Memo Component");
//     return <div>{name}</div>;
//   }
// }

// export default React.memo(MemoComp);

import React from "react";

function MemoComp({ name }) {
  console.log("Rendering Memo COmponent");
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
