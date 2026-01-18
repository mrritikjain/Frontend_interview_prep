import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter App</h1>
      <h2>Count : {count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
