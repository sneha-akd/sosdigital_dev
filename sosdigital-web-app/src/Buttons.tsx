

function Buttons(props: {
  onNext: () => void,
  onPrev: () => void,
  onFinish: () => void,
  isFirst: boolean,
  isLast: boolean,
  onClear: () => void,
  onsaveNext: () => void,
  onsavereview: () => void,
  onreviewnext: () => void,

}) {
  return (
    <div>
      <div className="additional-buttons">
        <button type="button" className="btn btn-success" onClick={() => props.onsaveNext()}>
          Save & Next
        </button>
        <button type="button" className="btn btn-warning" onClick={props.onsavereview}>
          Save & Mark For Review
        </button>
        <button type="button" className="btn btn-info" onClick={props.onreviewnext}>
          Mark For Review & Next
        </button>
        <button type="button" className="btn btn-light" onClick={props.onClear}>
          Clear Response
        </button>
      </div>

      <footer className="footer-buttons">
        <div className="button-container">
          <button

            type="button"
            className="btn btn-outline-primary"
            onClick={props.onPrev}
            disabled={props.isFirst}
          >
            <i className="bi bi-chevron-double-left"></i>Previous
          </button>
          <button

            type="button"
            className="btn btn-outline-success"
            onClick={props.onNext}
            disabled={props.isLast}
          >

            Next
            <i className="bi bi-chevron-double-right"></i>
          </button>

          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={props.onFinish}
          >
            Submit
          </button>
        </div>
      </footer>
    </div >
  );
}

export default Buttons;