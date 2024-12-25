import { useState, useEffect } from "react";
import { ActiveTestType, TestpageContext } from "./store/testpage-store";
import Answer, { Question_text } from "./Answer";
import Buttons from "./Buttons";
import Quiztimer from "./Quiztimer";
import { useNavigate } from "react-router-dom";


function Test(props: {
  userid: number,
  testid: number,
  scheduleid: number
  , setfinished: (_: boolean) => void
}) {
  //const { activetest, testStarted } = useContext(TestpageContext);
  const [activetest, setactivetest] = useState<ActiveTestType | undefined>(undefined);
  const [questionindex, setquestionindex1] = useState(0);
  const [userselection, setuserselection] = useState<(number | undefined)[]>([]);

  const exported_user_id = 2;

  // RESPONSIBILITY FUNCTIONS
  const manageuserselections = (questionindex: number, answerindex: number, checked: boolean) => {
    setuserselection((olddata) => {
      let newdata = [...olddata];
      newdata[questionindex] = checked ? answerindex : undefined;
      return newdata;
    });
  }

  const managequestionnavigation = (newquestionindex: number) => {
    if (activetest?.data.length && newquestionindex < activetest.data.length - 1 && newquestionindex >= 0) {
      setquestionindex1(newquestionindex);
    }
  }

  const postanswer = async (answerindex: number | undefined) => {

    try {
      const answer_data = {
        schedule_id: activetest?.schedule_id,
        user_id: exported_user_id,
        test_id: activetest?.test_id,
        data: [
          {
            answers: answerindex !== undefined ? [activetest?.data[questionindex]?.answers[answerindex]?.id] : [],
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

  const postAllAnswers = async () => {
    let report_data = [];
    // for (const qindex in userselection) {
    for (var qindex = 0; qindex < (activetest?.data.length ?? 0); ++qindex) {
      // console.log("on finish iter", selectedindex[qid]);
      const questionid = activetest?.data[qindex]?.id;
      const selectedAnswerIndex = userselection[qindex];

      const answers =
        selectedAnswerIndex !== undefined
          ? [
            activetest?.data[qindex]?.answers[selectedAnswerIndex]
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
        // return Promise.reject(`POST failed with ${response.status} ${response.text()}`);
      }
      // return Promise.resolve("POST success");
    } catch (error) {
      // an error occured
      // return Promise.reject(`POST failed with ${error}`);
    }
  }

  const changeclear = () => {
    // Reset selected option for current question
    manageuserselections(questionindex, 0, false);
    postanswer(undefined);
  };

  const handlesavenext = () => {
    const answerindex: number | undefined = userselection[questionindex];
    postanswer(answerindex);  // Save the answer before moving to next
    managequestionnavigation(questionindex + 1);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handlenext = () => {
    managequestionnavigation(questionindex + 1);
  };

  const handleprev = () => {
    managequestionnavigation(questionindex - 1);
  };

  // WORK DONE BY MAJHA NAVRA
  const handleuserselectionchange = (questionindex: number, answerindex: number, checked: boolean) => {
    manageuserselections(questionindex, answerindex, checked);
  }

  const changefinish = async () => {
    // await postAllAnswers();
    setactivetest(undefined);
    props.setfinished(true);
    navigator("/Studentreport");

    postAllAnswers();
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
  return activetest && <TestpageContext.Provider value={{ activetest }}>
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
          userselection={userselection}
          onuserselectionchange={handleuserselectionchange}
          questionindex={questionindex}
        />
        <Buttons
          onNext={handlenext}
          onPrev={handleprev}
          onFinish={changefinish}
          isFirst={questionindex === 0}
          isLast={
            activetest &&
            activetest.data &&
            questionindex === activetest.data.length - 1
          }
          onsaveNext={handlesavenext}
          onClear={changeclear}

        />
      </div>
    </>
  </TestpageContext.Provider>
};

export default Test;

