import { useEffect } from "react";

function UseDocTittle(count) {
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
}

export default UseDocTittle;
