import React from "react";
import { useTimer } from "./hook/useTimer";
const App = () => {
  const { time, start, pause, reset } = useTimer();
  return <div>
    <h2>Timer: {time}s</h2>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
  </div>;
};

export default App;
