import React, { useContext, useEffect, useState } from "react";
import { TestpageContext } from "./store/testpage-store";

// Timer component

function Quiztimer() {
  const activeTestContext = useContext(TestpageContext);

  // State to store the remaining time in seconds
  const [timeLeft, setTimeLeft] = useState(0);
  const [testStarted, setTestStarted] = useState(false); // Track test start

  // Calculate the initial time difference when the component mounts
  useEffect(() => {
    if (activeTestContext && activeTestContext.activetest.schedule_end) {
      const endTime = new Date(
        activeTestContext.activetest.schedule_end
      ).getTime();
      console.log(
        activeTestContext.activetest.schedule_end,
        new Date().toLocaleString()
      );
      const currentTime = Date.now();
      const initialTimeLeft = Math.max(
        0,
        Math.floor((endTime - currentTime) / 1000)
      ); // Convert to seconds
      setTimeLeft(initialTimeLeft);
      console.log(initialTimeLeft);
      // console.log(
      //   "activeTestContext.activetest.schedule_end",
      //   activeTestContext.activetest.schedule_end
      // );

      // Set up the interval to update the timer every second
      const intervalId = setInterval(() => {
        const currentTime = Date.now();
        const newTimeLeft = Math.max(
          0,
          Math.floor((endTime - currentTime) / 1000)
        );
        setTimeLeft(newTimeLeft);

        // If time is up, clear the interval
        if (newTimeLeft <= 0) {
          clearInterval(intervalId);
        }
        // console.log("Tick", newTimeLeft);
      }, 1000);

      // Cleanup interval on component unmount or when the test changes
      return () => clearInterval(intervalId);
    }
  }, [activeTestContext]);

  // Format time from seconds to hh:mm:ss
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  // Define color styles for the timer
  const getTimerColor = () => {
    if (timeLeft <= 10) {
      return { color: "red", fontWeight: "bold" };
    } else if (
      timeLeft <=
      Math.floor(
        (Date.parse(activeTestContext.activetest.schedule_end) - Date.now()) /
          1000
      ) *
        0.25
    ) {
      return { color: "orange" };
    }
    return { color: "black" };
  };

  return (
    <div>
      <h1 className="Q"> Quiz Timer </h1>
      <h2 className="Qtime" style={getTimerColor()}>
        {formatTime(timeLeft)}
      </h2>
    </div>
  );
}

export default Quiztimer;
