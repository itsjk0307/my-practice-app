import React, { useEffect, useState } from "react";

function DocTitleOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count ${count}`;
    document.title = `Count ${count}`;
  });
  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => setCount(count + 1)}>Button</button>
    </div>
  );
}

export default DocTitleOne;
