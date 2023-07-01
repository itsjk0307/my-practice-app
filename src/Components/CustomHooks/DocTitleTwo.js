import React, { useState } from "react";
import UseDocTittle from "../Hooks/UseDocTittle";

function DocTitleOne() {
  const [count, setCount] = useState(0);

  UseDocTittle(count);
  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => setCount(count + 1)}>Button</button>
    </div>
  );
}

export default DocTitleOne;
