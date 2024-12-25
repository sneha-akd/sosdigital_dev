import { useContext, useEffect, useState } from "react";
import { TestpageContext } from "./store/testpage-store"; // Import the context
import { useNavigate } from "react-router-dom";



// Timer component
function Quiztimer() {
  // const { activetest, dispatch } = useContext(TestpageContext);  // Destructure activetest and dispatch from context
  const testPageContext = useContext(TestpageContext);
  if (testPageContext === null) return;

  const { activetest } = testPageContext;

  // State to store the remaining time in seconds
  const [timeLeft, setTimeLeft] = useState(0);
  const navigator = useNavigate();

  // Calculate the initial time difference when the component mounts
  useEffect(() => {
    if (activetest && activetest.schedule_end) {
      const endTime = new Date(activetest.schedule_end).getTime();
      const currentTime = Date.now();
      const initialTimeLeft = Math.max(0, Math.floor((endTime - currentTime) / 1000)); // Convert to seconds
      setTimeLeft(initialTimeLeft);

      // Set up the interval to update the timer every second
      const intervalId = setInterval(() => {
        const currentTime = Date.now();
        const newTimeLeft = Math.max(0, Math.floor((endTime - currentTime) / 1000));
        setTimeLeft(newTimeLeft);

        // If time is up, clear the interval and clear the active test data
        if (newTimeLeft <= 0) {
          clearInterval(intervalId);
          navigator("/Studentreport");
        }
      }, 1000);

      // Cleanup interval on component unmount or when the test changes
      return () => clearInterval(intervalId);
    }
  }, [activetest]);

  // Format time from seconds to hh:mm:ss
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  // Define color styles for the timer
  const getTimerColor = () => {
    if (timeLeft <= 10) {
      return { color: "red", fontWeight: "bold" };
    } else if (
      activetest &&
      activetest.schedule_end &&
      timeLeft <=
      Math.floor(
        (Date.parse(activetest.schedule_end) - Date.now()) /
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