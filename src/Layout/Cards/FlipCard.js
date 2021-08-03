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
  let text = "";

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
