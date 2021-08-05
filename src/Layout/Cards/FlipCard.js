import React from "react"; 
import FlipCardButtons from "./FlipCardButtons";

function FlipCard({
  currentCard,
  length,
  front,
  back,
  orientation,
  HandleFlip,
  HandleNext,
}) {
  /* Component for the Flip cards on the study page */
  let text = "";

  // Sets the text that is showned based off the flip state
  if (orientation === "front") {
    text = front;
  } else {
    text = back;
  }

  return (
    <div className="card" style={{ width: "540px" }}>
      <div className="card-body">
        <h5 className="card-title">{`Card ${currentCard} of ${length}`}</h5>
        <p className="card-text">{text}</p>
        <FlipCardButtons orientation={orientation} HandleFlip={HandleFlip} HandleNext={HandleNext} />
      </div>
    </div>
  );
}

export default FlipCard;
