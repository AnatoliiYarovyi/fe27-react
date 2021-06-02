import { useState, useEffect, useRef } from 'react';

export const Timer = props => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const clear = () => {
    setTime(0);
    stop();
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <div>
      <span>{time}</span>
      <br />
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={clear}>CLear</button>
    </div>
  );
};
