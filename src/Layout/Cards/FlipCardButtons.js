import React from "react";

function FlipCardButtons({ orientation, HandleFlip, HandleNext }) {
  /* Generates the buttons needed for the flip cards on the study deck page */
  if (orientation === "back") {
    // displays the flip and next button if showing the back of the card
    return (
      <div className="card-buttons">
        <button type="button" className="btn btn-primary" onClick={HandleFlip}>
          Flip
        </button>
        <button type="button" className="btn btn-primary" onClick={HandleNext}>
          Next
        </button>
      </div>
    );
  } else {
    // displays the flip if showing the front of the card
    return (
      <div className="card-buttons">
        <button type="button" className="btn btn-primary" onClick={HandleFlip}>
          Flip
        </button>
      </div>
    );
  }
}

export default FlipCardButtons;
