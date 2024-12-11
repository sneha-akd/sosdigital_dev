

function Buttons({ onNext, onPrev, onFinish, isFirst, isLast, onClear }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-primary btn "
        onClick={onPrev}
        disabled={isFirst}
      >
        Previous
      </button>
      <button
        type="button"
        className="btn btn-outline-success btn "
        onClick={onNext}
        disabled={isLast}
      >
        Next
      </button>
      <button
        type="button"
        className="btn btn-outline-danger btn "
        onClick={onFinish}
      >
        Finish
      </button>
    </div>
  );
}

export default Buttons;
