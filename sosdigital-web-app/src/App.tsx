
import { useState } from "react";
import Studentreport from "./Studentreport";
import Testclock from "./Testclock";
import Test from "./Test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

export default function App() {

  const [finished, setfinished] = useState(false);
  const [userid, setuserid] = useState(2);
  const [testid, settestid] = useState<number | undefined>(undefined);
  const [scheduleid, setscheduleid] = useState<number | undefined>(undefined);



  return (
    <>

      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/testclock"
              element={<Testclock finished={finished} userid={userid} settestid={settestid} setscheduleid={setscheduleid} />}
            />
            <Route path="/test" element={<Test setfinished={setfinished} userid={userid} testid={testid} scheduleid={scheduleid} />} />
            <Route path="/studentreport" element={<Studentreport userid={userid} scheduleid={scheduleid} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
