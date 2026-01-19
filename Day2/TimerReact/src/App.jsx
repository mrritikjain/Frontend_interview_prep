import React, { useRef, useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const IntervalRef = useRef(null);

  let start = () => {
    if (IntervalRef.current !== null) return;
    IntervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  let pause = () => {
    clearInterval(IntervalRef.current);
    IntervalRef.current = null;
  };

  let reset = () => {
    setTime(0);
  };
  // CLEANUP
  useEffect(() => {
    return () => {
      clearInterval(IntervalRef.current);
    };
  }, []);
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
