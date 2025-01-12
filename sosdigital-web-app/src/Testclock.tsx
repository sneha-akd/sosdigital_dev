import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { app_base_path } from "./App";

function getTarik(dateVar: Date): string {
  return (
    dateVar.getDate() +
    "-" +
    (dateVar.getMonth() + 1) +
    "-" +
    dateVar.getFullYear()
  );
}
function getSamay(dateVar: Date): string {
  return (
    dateVar.getHours() + ":" + dateVar.getMinutes() + ":" + dateVar.getSeconds()
  );
}

type activeTestType = {
  test_id: number;
  title: string;
  subtitle: string;
  schedule_type: string;
  schedule_id: number;
  schedule_start: string;
  schedule_end: string;
  finished: boolean;
}
type activeTestResponseType = {
  data: activeTestType[];
}

type TestclockPropsType = {
  userid: number | undefined;
  finished: boolean;
  settestid: React.Dispatch<React.SetStateAction<number | undefined>>;
  setscheduleid: React.Dispatch<React.SetStateAction<number | undefined>>;
}
function Testclock(props: TestclockPropsType) {
  const [activetest, setactivetest] = useState<activeTestResponseType>({
    data: [],
  });
  const navigate = useNavigate();

  const fetchInfo = () => {
    if (props.userid === undefined) return null;
    return fetch(`https://sosdigital.in/borkar/views/active_test/?user_id=${props.userid}`)
      .then((res) => res.json())
      .catch((e) => {
        console.log("Error while fetching", e);
      })
      .then((d) => {
        if (d.data && d.data.length) {
          setactivetest(d);
          // console.log("fetchInfo", d);
        }
      });
  };

  const startTest = (test: activeTestType) => {
    const currenttime = new Date();
    const starttime = new Date(test.schedule_start);
    const endtime = new Date(test.schedule_end);
    if (currenttime <= starttime) {
      // If the current time is less than or equal to the schedule start time, don't start the test
      alert("Test cannot start yet.");
    } else if (currenttime > endtime) {
      // If the current time is greater than the schedule end time, the test has ended
      alert("Test time has ended.");
      // Optional: You could clear the test or navigate elsewhere if needed
      navigate(`${app_base_path}/Studentreport`); // or some other route to show that the test is over
    } else {
      // If the current time is between startTime and endTime, allow the test to start
      props.settestid(test.test_id);
      props.setscheduleid(test.schedule_id);

      navigate(`${app_base_path}/test`); // Navigate to the test route
    }
  };

  useEffect(() => {
    console.log("useEffect called on moun", props.userid);
    fetchInfo();
  }, [props.userid]);

  if (props.userid === undefined) return <p>Please select <a href="#" onClick={() => navigate(`${app_base_path}/`)}>Home</a> and login to continue</p>;

  return (
    <div className="row">
      {activetest && activetest.data.map((test: activeTestType, index: number) => {
        return <div className="card col-md-4 mb-3 " key={index} style={{ margin: "50px" }}>
          <div className="card-body">
            <h1 className="card-title">{test.title}</h1>
            <p className="card-text"> Start Time:{getSamay(new Date(test.schedule_start))} </p>
            <h6> End Time :{getSamay(new Date(test.schedule_end))} </h6>
            <h6>Date : {getTarik(new Date(test.schedule_start))}</h6>
            <button
              onClick={() => startTest(test)}
              className="btn btn-primary"
              disabled={props.finished}
            >
              Enter
            </button>
          </div>
        </div>
      })}
    </div>
  );
}
export default Testclock;
