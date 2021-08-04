import React from "react";
import { Link } from "react-router-dom";

function CardForm({
  type,
  submitHandler,
  changeHandler,
  front,
  back,
  frontPlaceHolder,
  backPlaceHolder,
  cancelLink,
}) {
  if (type === "edit") {
    return (
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label for="front" className="form-label">
            Front
          </label>
          <textarea
            type="text"
            className="form-control"
            id="front"
            name="front"
            aria-describedby="front"
            onChange={changeHandler}
            defaultValue={front}
          ></textarea>
        </div>
        <div className="mb-3">
          <label for="back" className="form-label">
            Back
          </label>
          <textarea
            type="text"
            className="form-control"
            id="back"
            name="back"
            aria-describedby="back"
            onChange={changeHandler}
            defaultValue={back}
          ></textarea>
        </div>
        <Link
          to={cancelLink}
          className="btn btn-secondary"
          href="#"
          role="button"
        >
          Cancel
        </Link>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
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
          defaultValue={front}
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
          defaultValue={back}
        ></textarea>
      </div>
      <Link
        to={cancelLink}
        className="btn btn-secondary"
        href="#"
        role="button"
      >
        Cancel
      </Link>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default CardForm;
