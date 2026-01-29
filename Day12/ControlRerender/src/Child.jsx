import React from "react";
const Child = React.memo(({ handleClick }) => {
  console.log("Child re-rendered");
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleClick}>Click from Child</button>
    </div>
  );
});

export default Child;
