import { useState, useEffect } from "react";
import { ActiveTestType, TestpageContext } from "./store/testpage-store";
import Answer, { Question_text } from "./Answer";
import Buttons from "./Buttons";
import Quiztimer from "./Quiztimer";
import { useNavigate } from "react-router-dom";
import Smallbuttons from "./Smallbuttons";

/// https://medium.com/@isurulakr/integrating-mathjax-version-3-in-react-d6fd4c5a8b81
/// Check this document for MathJax Reload on content change
/// If possible, we want to restrict the area on which mathjax typeset is done

function Test(props: {
  userid: number | undefined,
  testid: number | undefined,
  scheduleid: number | undefined,
  setfinished: (_: boolean) => void
}) {
  //const { activetest, testStarted } = useContext(TestpageContext);
  const [activetest, setactivetest] = useState<ActiveTestType | undefined>(undefined);
  const [questionindex, setquestionindex1] = useState(0);
  const [userselection, setuserselection] = useState<(number | undefined)[]>([]);
  const [userreview, setuserreview] = useState<(boolean | undefined)[]>([]);
  const [usersaved, setusersaved] = useState<(number | undefined)[]>([]);
  const [seen, setseen] = useState<(boolean | undefined)[]>([]);
  const navigator = useNavigate();

  const exported_user_id = 2;

  if (props.userid === undefined) return <p>Please select <a href="#" onClick={() => navigator("/")}>Home</a> and login to continue</p>;

  // RESPONSIBILITY FUNCTIONS
  const manageuserselections = (questionindex: number, answerindex: number, checked: boolean) => {
    setuserselection((olddata) => {
      let newdata = [...olddata];
      newdata[questionindex] = checked ? answerindex : undefined;
      return newdata;
    });
  }
  const manageseen = (questionindex: number) => {
    setseen((olddata) => {
      let newdata = [...olddata];
      newdata[questionindex] = true;
      return newdata;
    });
  }

  const managesavedanswer = (questionindex: number, answerindex: number | undefined) => {
    setusersaved((olddata) => {
      let newdata = [...olddata]
      newdata[questionindex] = answerindex;
      return newdata;
    })
  }

  const managequestionnavigation = (newquestionindex: number) => {
    if (activetest?.data.length && newquestionindex < activetest.data.length - 1 && newquestionindex >= 0) {
      manageseen(questionindex);
      setquestionindex1(newquestionindex);
    }
  }

  const postanswer = async (answerindex: number | undefined, review: boolean) => {

    try {
      const answer_data = {
        schedule_id: activetest?.schedule_id,
        user_id: exported_user_id,
        test_id: activetest?.test_id,
        data: [
          {
            review: review,
            answers: answerindex !== undefined ? [activetest?.data[questionindex]?.answers[answerindex]?.id] : [],
            question: activetest?.data[questionindex]?.id,
          },
        ],
      };

      // console.log(answer_data);
      // send request to backend and wait for the response
      const response = await fetch(
        "https://sosdigital.in/borkar/views/response/",
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
        "https://sosdigital.in/borkar/views/test_response/",
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

  const userselectreview = (questionindex: number, review: boolean | undefined) => {
    setuserreview((olddata) => {
      let newdata = [...olddata];
      newdata[questionindex] = review;
      return newdata;
    });

  };


  // USER ACTION FUNCTION
  const changeclear = () => {
    // Reset selected option for current question
    manageuserselections(questionindex, 0, false);
    managesavedanswer(questionindex, undefined);
    userselectreview(questionindex, undefined);
    postanswer(undefined, false);
  };

  const handlesavenext = () => {
    const answerindex: number | undefined = userselection[questionindex];
    managesavedanswer(questionindex, answerindex);
    postanswer(answerindex, false);  // Save the answer before moving to next
    managequestionnavigation(questionindex + 1);
    userselectreview(questionindex, undefined);
  };

  const handlesavemarkreview = () => {
    const answerindex: number | undefined = userselection[questionindex];
    managesavedanswer(questionindex, answerindex);
    postanswer(answerindex, true);
    userselectreview(questionindex, true);
  }



  const handlereviewandnext = () => {
    const answerindex: number | undefined = usersaved[questionindex];
    postanswer(answerindex, true);
    userselectreview(questionindex, true);
    managequestionnavigation(questionindex + 1)
  }


  useEffect(() => {
    fetchInfo();
  }, []);

  const handlenext = () => {
    manageuserselections(questionindex, 0, false);
    managequestionnavigation(questionindex + 1);
  };

  const handleprev = () => {
    manageuserselections(questionindex, 0, false);
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
    const url = `https://sosdigital.in/borkar/views/test_view/?user_id=${props.userid}&test_id=${props.testid}&schedule_id=${props.scheduleid}`;

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


  return activetest && <TestpageContext.Provider value={{ activetest }}>
    <>
      <div className="">


        <Quiztimer />

        <div className="row">
          <div className="Test col-md-9">
            <Question_text questionindex={questionindex}

            />
            <Answer
              userselection={userselection}
              usersaved={usersaved}
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
              onsavereview={handlesavemarkreview}
              onreviewnext={handlereviewandnext}
            />
          </div>
          <Smallbuttons
            usersaved={usersaved}
            userreview={userreview}
            seen={seen}
            onClickHandler={managequestionnavigation}
          />
        </div>
      </div>
    </>

  </TestpageContext.Provider>
};

export default Test;

