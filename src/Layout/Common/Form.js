import React from "react"; 
import { Link } from "react-router-dom";

function Form({
  cancelLink,
  deckName,
  deckDescription,
  submitHandler,
  changeHandler,
}) {
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          aria-describedby="deckName"
          placeholder="Deck Name"
          onChange={changeHandler}
          value={deckName}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Deck Description
        </label>
        <textarea
          type="text"
          className="form-control"
          id="description"
          name="description"
          aria-describedby="deckDescription"
          placeholder="Deck Description"
          onChange={changeHandler}
          value={deckDescription}
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

export default Form;
