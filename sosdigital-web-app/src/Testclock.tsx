import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function getTarik(dateVar) {
  return (
    dateVar.getDate() +
    "-" +
    (dateVar.getMonth() + 1) +
    "-" +
    dateVar.getFullYear()
  );
}
function getSamay(dateVar) {
  return (
    dateVar.getHours() + ":" + dateVar.getMinutes() + ":" + dateVar.getSeconds()
  );
}

//function getSamay(dateVar) {
//return (
//dateVar.getHours() + ":" + dateVar.getMinutes() + ":" + dateVar.getSeconds()
//);
//}

function Testclock(props) {
  const [activetest, setactivetest] = useState({
    data: [
      {
        schedule_start: "test",
        schedule_end: "test",
      },
    ],
  });
  const [tarik, setTarik] = useState(getTarik(new Date()));
  const [schedule_start, setSchSt] = useState(getSamay(new Date()));
  const [schedule_end, setSchend] = useState(getSamay(new Date()));
  const [testStarted, setTestStarted] = useState(false); // State to control whether the test has started
  const navigate = useNavigate();

  // console.log(activetest);
  /*useEffect(() => {
    if (activetest.data.length) {
      setTarik(getTarik(new Date(activetest.data[0].schedule_start)));
      setSchSt(getSamay(new Date(activetest.data[0].schedule_start)));
      setSchend(getSamay(new Date(activetest.data[0].schedule_end)));

      if (new Date() >= startDate) {
        setCanEnter(true);
      }
    }
  }, [activetest]);*/

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = () => {
    return fetch("https://sosdigital.in/dev2_views/active_test/?user_id=1")
      .then((res) => res.json())
      .catch((e) => {
        console.log("Error while fetching", e);
      })
      .then((d) => {
        if (d.data && d.data.length) {
          setactivetest(d);
          console.log("fetchInfo", d);
        }
      });
  };

  useEffect(() => {
    if (activetest.data.length) {
      const startDate = new Date(activetest.data[0].schedule_start);
      const endDate = new Date(activetest.data[0].schedule_end);

      setTarik(getTarik(startDate));
      setSchSt(getSamay(startDate));
      setSchend(getSamay(endDate));

      // Enable "Enter" button based on time comparison
    }
  }, [activetest]);

  const startTest = () => {
    const currenttime = new Date();
    const starttime = new Date(activetest.data[0].schedule_start);
    const endtime = new Date(activetest.data[0].schedule_end);
    if (currenttime <= starttime) {
      // If the current time is less than or equal to the schedule start time, don't start the test
      alert("Test cannot start yet.");
    } else if (currenttime >= endtime) {
      // If the current time is greater than the schedule end time, the test has ended
      alert("Test time has ended.");
      // Optional: You could clear the test or navigate elsewhere if needed
      navigate("/Studentreport"); // or some other route to show that the test is over
    } else {
      // If the current time is between startTime and endTime, allow the test to start
      setTestStarted(true); // Start the test when the button is clicked
      navigate("/test"); // Navigate to the test route
    }
  };

  return (
    <>
      <div className="card w-75 mb-3" style={{ margin: "30px" }}>
        <div className="card-body">
          <h1 className="card-title">Test</h1>
          <p className="card-text"> Start Time:{schedule_start} </p>
          <h6> End Time :{schedule_end} </h6>
          <h6>Date : {tarik}</h6>
          <button
            onClick={startTest}
            className="btn btn-primary"
            disabled={props.finished}
            
          >
            Enter
          </button>
        </div>
      </div>
    </>
  );
}
export default Testclock;
