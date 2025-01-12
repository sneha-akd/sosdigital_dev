import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


type MultiReportResponseType = {
  data: {
    attempted: number,
    correct: number,
    incorrect: number,
    total: number,
    unattempted: number,
    title: string,
  }[],
};

function Studentreport(props: {
  userid: number | undefined,
}) {


  const [reports, setreports] = useState<MultiReportResponseType | null>(null);
  const [activereportindex, setactivereportindex] = useState<number | null>(null);

  const navigator = useNavigate();






  // Effect to trigger fetchInfo when `userid` or `scheduleid` change
  //   useEffect(() => {
  //   if (props.userid ) {
  //     fetchInfo();
  //   }

  // }, [props.userid]);


  const fetchInfo1 = () => {
    fetch(
      `https://sosdigital.in/borkar/views/reports/?user_id=${props.userid}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.statusText} (${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        setreports(data);

      })
      .catch((e) => {
        console.error("Error fetching data:", e);
      });
  };
  console.log(reports);


  useEffect(() => {
    if (props.userid) {
      fetchInfo1();

    }

  }, [props.userid]);



  if (props.userid === undefined) return <p>Please select <a href="#" onClick={() => navigator("/")}>Home</a> and login to continue</p>;

  return (<>
    <div className="mt-3 ">Quiz Final Result</div>
    <div className="row  justify-content-center">
      {reports?.data.map((report, index) => {
        return <div className=" col-sm-2 mb-3 ms-4">
          <div className="card">
            <div className="card-body p-3 ">
              <h5 className="card-title">Final Report</h5>

              <p className="card-text">{report.title}</p>

              <button className="btn btn-primary" onClick={() => {
                // setShowDetails(!showDetails);
                setactivereportindex(index);
              }}>
                {/* {showDetails  ? "Hide Details" : "Show Details"} */}
                Show Details
              </button>
            </div>
          </div>
        </div>;
      })}

    </div >

    {reports && activereportindex !== null ? (
      <div>
        <p>Attempted Questions: {reports?.data[activereportindex]?.attempted}</p>
        <p>Correct Answers: {reports?.data[activereportindex]?.correct}</p>
        <p>Incorrect Answers: {reports.data[activereportindex]?.incorrect}</p>
        <p>Total Questions: {reports.data[activereportindex]?.total}</p>
        <p>Unattempted Questions: {reports.data[activereportindex]?.unattempted}</p>

      </div>
    ) : (
      <div>No data available</div> // Handle case when `correctanswer` is null or empty
    )
    }

  </>
  );
}

export default Studentreport;