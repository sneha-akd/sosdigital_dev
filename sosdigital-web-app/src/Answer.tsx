

import { TestpageContext } from "./store/testpage-store";
import { useContext } from "react";

function Question_text(props) {
  const activeTestContext = useContext(TestpageContext);
  let question =
    activeTestContext?.activetest?.data[props.questionindex]?.descr;
  return (
    question !== undefined && (
      <div>
        <p> Question number: {props.questionindex} </p>
        <p
          dangerouslySetInnerHTML={{
            __html: question,
          }}
        ></p>
      </div>
    )
  );
}

function Answer(props) {
  const activeTestContext = useContext(TestpageContext);
  // console.log("Answer", activeTestContext);
  // {`checkbox ${
  //   props.clickoption == index ? "checked" : " unchecked "
  // }`}
  const answers =
    activeTestContext?.activetest?.data[props.questionindex]?.answers;
  // console.log("Answer", props.questionindex, answers);
  return (
    answers !== undefined && (
      <div>
        {answers.map((answer, index) => {
          return (
            <div key={answer.id}>
              <input
                //onChange={() => props.setChecked(!checked)}
                onChange={(e) => {
                  props.setclickoption(index, e.target.checked);
                  //props.setChecked(!checked);

                  //props.setclickoption(index, e.target.checked);
                  //console.log(e.target.checked);
                  props.saveanswer(index, e.target.checked);
                  
                }}
                type="checkbox"
                id={answer.id}
                name=""
                value=""
                checked={props.clickoption == index}
              />
              <label htmlFor={answer.id}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: answer.descr,
                  }}
                ></span>
              </label>
            </div>
          );
        })}
        <br />
      </div>
    )
  );
}

export default Answer;
export { Question_text };
