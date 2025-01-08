
import { useState } from "react";
import Studentreport from "./Studentreport";
import Testclock from "./Testclock";
import Test from "./Test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import Header from "./Header";




export default function App() {
  // RESPONSIBILITY FUNCTIONS
  const getLocalStorageUserId = () => {
    return localStorage.getItem("userid");
  }
  function getUserIdFromStorage() {
    const storedUserid = getLocalStorageUserId();
    if (storedUserid === null) return undefined;
    else return Number(storedUserid);
  }

  const [finished, setfinished] = useState(false);
  const [userid, setuserid] = useState<number | undefined>(getUserIdFromStorage());
  const [testid, settestid] = useState<number | undefined>(undefined);
  const [scheduleid, setscheduleid] = useState<number | undefined>(undefined);

  // RESPONSIBILITY FUNCTIONS
  const manageUserId = (_userid: number | undefined) => {
    if (_userid === undefined) {
      localStorage.removeItem("userid");
    } else {
      localStorage.setItem("userid", _userid.toString());
    }
    setuserid(_userid);
  }

  return (

    <>
      <div className="App">
        <Router>
          < Header manageUserId={manageUserId} userid={userid} />
          <Routes>
            <Route index element={<Homepage />} />
            <Route
              path="/testclock"
              element={<Testclock finished={finished} userid={userid} settestid={settestid} setscheduleid={setscheduleid} />}
            />
            <Route path="/test" element={<Test setfinished={setfinished} userid={userid} testid={testid} scheduleid={scheduleid} />} />
            <Route path="/studentreport" element={<Studentreport userid={userid} scheduleid={scheduleid} />} />
          </Routes>
        </Router>
        {/* )} */}
      </div >
    </>
  );
}
