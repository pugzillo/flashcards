import { Link } from "react-router-dom";

function CardForm({ submitHandler, changeHandler, front, back, cancelLink }) {
  return (
    <form onSubmit={submitHandler}>
      <div class="mb-3">
        <label for="Front" class="form-label">
          Front
        </label>
        <textarea
          type="text"
          class="form-control"
          id="Front"
          name="Front"
          aria-describedby="Front"
          placeholder="Front side of Card"
          onChange={changeHandler}
          value={front}
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="Back" class="form-label">
          Back
        </label>
        <textarea
          type="text"
          class="form-control"
          id="Back"
          name="Back"
          aria-describedby="Back"
          placeholder="Back side of Card"
          onChange={changeHandler}
          value={front}
        ></textarea>
      </div>
      <Link to={cancelLink} class="btn btn-secondary" href="#" role="button">
        Cancel
      </Link>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default CardForm;
