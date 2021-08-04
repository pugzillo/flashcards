import React from "react"; 
import { Link } from "react-router-dom";

function CardForm({ submitHandler, changeHandler, front, back, frontPlaceHolder, backPlaceHolder, cancelLink }) {
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label for="Front" className="form-label">
          Front
        </label>
        <textarea
          type="text"
          className="form-control"
          id="Front"
          name="Front"
          aria-describedby="Front"
          placeholder={frontPlaceHolder}
          onChange={changeHandler}
          value={front}
        ></textarea>
      </div>
      <div className="mb-3">
        <label for="Back" className="form-label">
          Back
        </label>
        <textarea
          type="text"
          className="form-control"
          id="Back"
          name="Back"
          aria-describedby="Back"
          placeholder={backPlaceHolder}
          onChange={changeHandler}
          value={back}
        ></textarea>
      </div>
      <Link to={cancelLink} className="btn btn-secondary" href="#" role="button">
        Cancel
      </Link>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default CardForm;
