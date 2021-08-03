function FlipCardButtons({ orientation, HandleFlip, HandleNext}) {
    if (orientation === "back") {
      return (
        <div className="card-buttons">
          <button
            type="button"
            className="btn btn-primary"
            onClick={HandleFlip}
          >
            Flip
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={HandleNext}
          >
            Next
          </button>
        </div>
      );
    } else {
      return (
        <div className="card-buttons">
          <button
            type="button"
            className="btn btn-primary"
            onClick={HandleFlip}
          >
            Flip
          </button>
        </div>
      );
    }
  };

  export default FlipCardButtons;