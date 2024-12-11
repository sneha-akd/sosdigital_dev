import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Studentreport() {
  const [correctanswer, setcorrectanswer] = useState("");

  const fetchInfo = () => {
    return fetch(
      " https://sosdigital.in/dev2_views/report/?user_id=2&schedule_id=711"
    )
      .then((res) => res.json())
      .catch((e) => {
        console.log("Error while fetching", e);
      })
      .then((d) => {
        console.log(d);
        setcorrectanswer(d);
        // });
        // console.log("fetchinfo", d);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const navigator = useNavigate();
  return (
    <>
      <button onClick={() => navigator("/testclock")}>Go to Home Page</button>
      <div>Quiz Final Result</div>

      <div>
        Attempted Question :{correctanswer.attempted}
        <br />
        Correct Answer : {correctanswer.correct} <br />
        Incorrect Answer :{correctanswer.incorrect} <br />
        Total Question : {correctanswer.total}
        <br />
        Unattempted Question :{correctanswer.unattempted}
      </div>
    </>
  );
}
export default Studentreport;
