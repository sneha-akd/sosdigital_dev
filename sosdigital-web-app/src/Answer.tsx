

import MathJaxComponent from "./MathJaxComponent";
import { TestpageContext } from "./store/testpage-store";
import { useContext } from "react";

function Question_text(props: {
  questionindex: number,
}) {
  const activeTestContext = useContext(TestpageContext);
  let question =
    activeTestContext?.activetest?.data[props.questionindex]?.descr;

  return (
    question !== undefined && (
      <div>
        <h3> Question number: {props.questionindex + 1} </h3>
        <MathJaxComponent>{question}</MathJaxComponent>
      </div>
    )
  );
}

function Answer(props: {
  questionindex: number,
  onuserselectionchange: (questionindex: number, answewrindex: number, checked: boolean) => void,
  userselection: (number | undefined)[],
  usersaved: (number | undefined)[],
}) {
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
        {answers.map((answer: { id: number, descr: string }, index: number) => {
          return (
            <div key={answer.id}>
              <input
                //onChange={() => props.setChecked(!checked)}
                onChange={(e) => {
                  // props.setclickoption(index, e.target.checked);

                  props.onuserselectionchange(props.questionindex, index, e.target.checked);

                }}
                type="checkbox"
                id={answer.id.toString()}
                name=""
                value=""
                checked={(props.userselection[props.questionindex] ?? props.usersaved[props.questionindex]) === index}
              />
              <label htmlFor={answer.id.toString()}>
                <MathJaxComponent>{answer.descr}</MathJaxComponent>
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
