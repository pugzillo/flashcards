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
        <label for="name" class="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          id="name"
          name="name"
          aria-describedby="deckName"
          placeholder="Deck Name"
          onChange={changeHandler}
          value={deckName}
        ></input>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">
          Deck Description
        </label>
        <textarea
          type="text"
          class="form-control"
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
        class="btn btn-secondary"
        href="#"
        role="button"
      >
        Cancel
      </Link>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
