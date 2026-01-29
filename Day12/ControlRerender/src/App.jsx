import React, { useCallback, useState } from "react";
import Child from "./Child";
const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <Child handleClick={handleClick} />
    </div>
  );
};

export default App;
