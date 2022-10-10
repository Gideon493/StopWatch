import { useState, useEffect } from "react";
import Reset from "./Reset";
import Resume from "./Resume";
import Start from "./Start";
import Stop from "./Stop";

const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, SetIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused]);
  const onStart = () => {
    SetIsActive(true);
    setIsPaused(false);
    setTimer(0);
  };
  const onResume = () => {
    SetIsActive(true);
    setIsPaused(false);
  };
  const onStop = () => {
    SetIsActive(false);
    setIsPaused(true);
  };

  const onReset = () => {
    SetIsActive(false);
    setTimer(0);
  };

  return (
    <div className="ml-20 bg-cyan-600 p-5 m-7 rounded-lg">
      <div className=" bg-cyan-600 px-28 text-center m-5">
        <h1 className="text-2xl text-yellow-50">StopWatch</h1>
        <h1 className="text-6xl text-white p-20 ">
          {("0" + Math.floor((timer / 6000) % 60)).slice(-2)}:
          {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:
          {("0" + ((timer / 10) % 100)).slice(-2)}
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-0">
        {<Start isActive={isActive} isPaused={isPaused} onStart={onStart} />}
        {<Stop isActive={isActive} isPaused={isPaused} onStop={onStop} />}
        {<Reset isActive={isActive} onReset={onReset} />}
        {<Resume isActive={isActive} isPaused={isPaused} onResume={onResume} />}
      </div>
    </div>
  );
};

export default StopWatch;
