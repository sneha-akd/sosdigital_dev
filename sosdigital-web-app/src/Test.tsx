import { useState, useEffect } from "react";
import { TestpageContext } from "./store/testpage-store";
import Answer, { Question_text } from "./Answer";
import Buttons from "./Buttons";
import Quiztimer from "./Quiztimer";
import { useNavigate } from "react-router-dom";

function Test(props) {
  //const { activetest, testStarted } = useContext(TestpageContext);
  const [activetest, setactivetest] = useState({ data: [] });
  const [questionindex, setquestionindex1] = useState(0);
  const [clickoption, setclickoption] = useState(null);
  const [selectedindex, setselectedindex] = useState({});



  const exported_user_id = 2;

  const changesavenext = () => {
    if (activetest.data.length && questionindex < activetest.data.length - 1)
      setquestionindex1(questionindex + 1);
    setclickoption(selectedindex[questionindex + 1]);
  };



  const changenext = () => {
    if (activetest.data.length && questionindex < activetest.data.length - 1) {
      setquestionindex1(questionindex + 1);
      setclickoption(selectedindex[questionindex + 1]);
    }
  };



  const changeprev = () => {
    if (activetest.data.length && questionindex > 0)
      setquestionindex1(questionindex - 1);
    setclickoption(selectedindex[questionindex - 1]);
  };

  const changefinish = async (index: number) => {
    setactivetest({
      data: [],
    });
    props.setfinished(true);
    navigator("/Studentreport");




    //setshowresult(true);

    // console.log("onfinish", selectedindex);
    let report_data = [];
    for (const qindex in selectedindex) {
      // console.log("on finish iter", selectedindex[qid]);
      const questionid = activetest?.data[parseInt(qindex)]?.id;
      const selectedAnswerIndex = selectedindex[qindex];

      const answers =
        selectedAnswerIndex !== null
          ? [
            activetest?.data[parseInt(qindex)]?.answers[selectedAnswerIndex]
              ?.id,
          ]
          : [];

      // console.log(qindex, "Q:", questionid, " A:", answers);
      let this_report_item = {
        question: questionid,
        answers,
      };
      report_data.push(this_report_item);
    }
    try {
      const answer_data1 = {
        schedule_id: activetest?.schedule_id,
        user_id: exported_user_id,
        test_id: activetest?.test_id,
        data: report_data,
      };

      // console.log(answer_data1);
      // send request to backend and wait for the response
      const response = await fetch(
        "https://sosdigital.in/views/test_response/",
        {
          method: "POST",
          // Data will be serialized and sent as json
          body: JSON.stringify(answer_data1),
          // tell the server we're sending JSON
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log("request sent", response);
      if (!response.ok) {
        // server returned a status code other than 200-299 --> something went wrong
        // console.log("fetch failed");
        // console.log(await response.text());
      }
    } catch (error) {
      // an error occured
      console.log("Fetch Error", error);
    }
  };

  const setAnswer = (index: number, checked: boolean) => {
    setclickoption(checked ? index : -1);

    // console.log(setclickoption);
  };

  const saveanswer = async (answerindex: number, checked: boolean) => {
    // CR: Handle unselection of all answers
    setselectedindex((olddata) => {
      let newdata = { ...olddata };

      newdata[questionindex] = checked ? answerindex : null;
      // console.log("saveanswer", newdata);
      return {
        ...newdata,
      };
    });

    // console.log("save answer set selected index done");
    try {
      const answer_data = {
        schedule_id: activetest?.schedule_id,
        user_id: exported_user_id,
        test_id: activetest?.test_id,
        data: [
          {
            //key: checked ? index : null,

            answers: checked
              ? [activetest?.data[questionindex]?.answers[answerindex]?.id]
              : [],

            question: activetest?.data[questionindex]?.id,
          },
        ],
      };

      // console.log(answer_data);
      // send request to backend and wait for the response
      const response = await fetch(
        "https://sosdigital.in/dev_views/response/",
        {
          method: "POST",
          // Data will be serialized and sent as json
          body: JSON.stringify(answer_data),
          // tell the server we're sending JSON
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log("request sent", response);
      if (!response.ok) {
        // server returned a status code other than 200-299 --> something went wrong
        // console.log("fetch failed");
        console.log(await response.text());
      }
    } catch (error) {
      // an error occured
      console.log("Fetch Error", error);
    }
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = () => {
    // Dynamically build the URL based on the function's parameters
    const url = `https://sosdigital.in/views/test_view/?user_id=${props.userid}&test_id=${props.testid}&schedule_id=${props.scheduleid}`;

    return fetch(url)
      .then((res) => res.json())
      .catch((e) => {
        console.log("Error while fetching test_data", e);
      })
      .then((d) => {
        if (d !== undefined) {
          setactivetest(d);
        }
      });
  };




  const navigator = useNavigate();
  return (
    <TestpageContext.Provider value={{ activetest }}>
      <>
        <div>
          <p> Test Id : {props.testid}</p>
          <p> Schedule Id : {props.scheduleid}</p>
          <button
            onClick={() => {
              navigator("/testclock");
            }}
          >
            Go to Home Page
          </button>
        </div>
        <Quiztimer />
        <div className="Test">
          <Question_text questionindex={questionindex} />
          <Answer
            clickoption={clickoption}
            setclickoption={setAnswer}
            saveanswer={saveanswer}
            questionindex={questionindex}
          />
          <Buttons
            onNext={changenext}
            onPrev={changeprev}
            onFinish={changefinish}
            isFirst={questionindex === 0}
            isLast={
              activetest &&
              activetest.data &&
              questionindex === activetest.data.length - 1

            }
            onsaveNext={changesavenext}
          />
        </div>
      </>
    </TestpageContext.Provider>
  );
}

export default Test;
