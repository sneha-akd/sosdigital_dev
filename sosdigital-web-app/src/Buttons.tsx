

function Buttons({ onNext, onPrev, onFinish, isFirst, isLast, onClear, onsaveNext }) {
  return (
    <div>
      <div className="additional-buttons">
        <button type="button" className="btn btn-success" onClick={onsaveNext}>
          Save & Next
        </button>
        <button type="button" className="btn btn-warning">
          Save & Mark For Review
        </button>
        <button type="button" className="btn btn-info">
          Mark For Review & Next
        </button>
        <button type="button" className="btn btn-light" onClick={onClear}>
          Clear Response
        </button>
      </div>

      <footer className="footer-buttons">
        <div className="button-container">
          <button

            type="button"
            className="btn btn-outline-primary"
            onClick={onPrev}
            disabled={isFirst}
          >
            <i className="bi bi-chevron-double-left"></i>Previous
          </button>
          <button

            type="button"
            className="btn btn-outline-success"
            onClick={onNext}
            disabled={isLast}
          >

            Next
            <i className="bi bi-chevron-double-right"></i>
          </button>

          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={onFinish}
          >
            Finish
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Buttons;