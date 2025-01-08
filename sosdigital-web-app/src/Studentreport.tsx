import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Studentreport(props: {
  userid: number | undefined,
  scheduleid: number | undefined,
}) {
  const [correctanswer, setcorrectanswer] = useState<{
    attempted: number,
    correct: number,
    incorrect: number,
    total: number,
    unattempted: number,
  } | null>(null);

  const navigator = useNavigate();

  const fetchInfo = () => {
    fetch(
      `https://sosdigital.in/borkar/views/report/?user_id=${props.userid}&schedule_id=${props.scheduleid}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.statusText} (${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        setcorrectanswer(data);
      })
      .catch((e) => {
        console.error("Error fetching data:", e);
      });
  };

  // Effect to trigger fetchInfo when `userid` or `scheduleid` change
  useEffect(() => {
    if (props.userid && props.scheduleid) {
      fetchInfo();
    }
  }, [props.userid, props.scheduleid]);

  if (props.userid === undefined) return <p>Please select <a href="#" onClick={() => navigator("/")}>Home</a> and login to continue</p>;

  return (
    <>
      <button onClick={() => navigator("/")}>Go to Home Page</button>
      <div>Quiz Final Result</div>

      {correctanswer ? (
        <div>
          <p>Attempted Questions: {correctanswer.attempted}</p>
          <p>Correct Answers: {correctanswer.correct}</p>
          <p>Incorrect Answers: {correctanswer.incorrect}</p>
          <p>Total Questions: {correctanswer.total}</p>
          <p>Unattempted Questions: {correctanswer.unattempted}</p>
        </div>
      ) : (
        <div>No data available</div> // Handle case when `correctanswer` is null or empty
      )}
    </>
  );
}

export default Studentreport;