
import { TestpageContext } from "./store/testpage-store";
import { useContext } from "react";




function Smallbuttons({ usersaved, userreview, seen, onClickHandler }: {

  usersaved: (number | undefined)[];
  userreview: (boolean | undefined)[],
  seen: (boolean | undefined)[]
  onClickHandler: (index: number) => void,
}) {

  const activeTestContext = useContext(TestpageContext);
  let questions =
    activeTestContext?.activetest?.data;

  const getButtonClass = (index: number) => {

    if (usersaved[index] !== undefined
      && userreview[index]) {
      return "btn-answeredreview";
    } else if (usersaved[index] !== undefined) {
      return "btn-answered";
    } else if (userreview[index] === true) {
      return "btn-review";
    } else if (seen[index] === true) {
      return "btn-unanswered";
    } else {
      return "btn-unseen";
    }
  }

  return (
    <div className="col-md-3">
      <div className="d-flex flex-wrap mb-5 ">
        <span className="col-xl-6 text-start"><button className="qpanel-btn btn-unseen">89</button> Not Visited</span>
        <span className="col-xl-6 text-start"><button className="qpanel-btn btn-unanswered">1</button>Not Answered</span>
        <span className="col-xl-6 text-start"><button className="qpanel-btn btn-answered">0</button>Answered</span>
        <span className="col-xl-6 text-start"><button className="qpanel-btn btn-review">0</button>Marked for Review</span>
        <span className="col-xl-12 text-start"><button className="qpanel-btn btn-answeredreview">0</button>Answered and Mark for Review</span>
      </div>

      <div className="d-flex gap-2 flex-wrap">
        {questions?.map((_, index: number) => <button key={index} className={`qpanel-btn ${getButtonClass(index)}`} onClick={() => onClickHandler(index)}>{index + 1} </button>)}
      </div>
    </div>
  )
}
export default Smallbuttons;