import { Link } from  "react-router-dom";

function Card({ front, back }) {

  return (
    <div class="card mb-3" style={{ maxWidth: "540px" }}>
      <div class="row g-0">
        <div class="col-md-6">
          <div class="card-body">
            <p class="card-text">{front}</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <p class="card-text">{back}</p>
            <p class="card-links">
                <Link to="" class="btn btn-primary" href="#" role="button">Edit</Link>
                <button type="button" class="btn btn-primary">Delete</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
