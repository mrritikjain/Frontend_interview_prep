import React from "react";

function logAction(action) {
  console.log(`${this.user} clicked ${action}`);
}

  const user = { user: "Ritik" };
  const handleClick = logAction.bind(user, "Save Button");
  
const App = () => {
  return (
    <div>
      <h2>Action Tracker</h2>
      <button onClick={handleClick}>Save</button>
    </div>
  );
};
export default App;
