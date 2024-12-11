
import { useState, useEffect } from "react";
import Studentreport from "./Studentreport";
import Testclock from "./Testclock";
import Test from "./Test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

export default function App() {
  const [activetest, setactivetest] = useState({ data: [] });
  const [finished, setfinished] = useState(false);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = () => {
    return fetch(
      "https://sosdigital.in/views/test_view/?user_id=2&test_id=31&schedule_id=686"
    )
      .then((res) => res.json())
      .catch((e) => {
        console.log("Error while fetching test_data", e);
      })
      .then((d) => {
        if (d !== undefined) {
          setactivetest(d);
          // console.log("First Fetch Info", d);
        }
      });
  };

  return (
    <>

      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/testclock"
              element={<Testclock finished={finished} />}
            />
            <Route path="/test" element={<Test setfinished={setfinished} />} />
            <Route path="/studentreport" element={<Studentreport />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
