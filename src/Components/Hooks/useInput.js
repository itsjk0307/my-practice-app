import { useState } from "react";

function useInput() {
  const [value, setValue] = useState("");
  const reset = () => {
    setValue("");
  };
  const bind = {};
  return [value, reset, bind];
}

export default useInput;
