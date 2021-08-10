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
  /* Form component used for both add and edit card */
  if (type === "edit") {
    return (
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="front" className="form-label">
            Front
          </label>
          <textarea
            type="text"
            className="form-control"
            id="front"
            name="front"
            aria-describedby="front"
            onChange={changeHandler} 
            value={front}   // Current value can be edited
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="back" className="form-label">
            Back
          </label>
          <textarea
            type="text"
            className="form-control"
            id="back"
            name="back"
            aria-describedby="back"
            onChange={changeHandler}
            value={back}
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
        <label htmlFor="front" className="form-label">
          Front
        </label>
        <textarea
          type="text"
          className="form-control"
          id="front"
          name="front"
          aria-describedby="front"
          placeholder={frontPlaceHolder}   // Value will disappear when user clicks in text area
          onChange={changeHandler}
          value={front}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="back" className="form-label">
          Back
        </label>
        <textarea
          type="text"
          className="form-control"
          id="back"
          name="back"
          aria-describedby="back"
          placeholder={backPlaceHolder}
          onChange={changeHandler}
          value={back}
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
