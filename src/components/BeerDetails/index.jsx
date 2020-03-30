import React from "react";
import { Link } from "react-router-dom";

const BeerDetails = ({ data }) => (
  <div className="row justify-content-md-right">
    <div
      className="card"
      style={{ border: "none", minHeight: "20rem", marginTop: "10%" }}
    >
      <div className="row no-gutters">
        <div className="col-md-3 text-center">
          {data.image_url && (
            <img
              src={data.image_url}
              className="img-fluid"
              alt="..."
              style={{ width: "5rem", height: "20rem" }}
            />
          )}
        </div>
        <div className="col-md-9 text-center">
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{data.tagline}</h6>
            <p className="card-text">{data.description}</p>
            <p className="card-text">abv: {data.abv}%</p>
            <Link className="btn btn-primary" to="/">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BeerDetails;
