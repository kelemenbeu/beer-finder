import React from "react";
import { Link } from "react-router-dom";

const BeerDetails = ({ data }) => (
  <div className="row justify-content-md-center">
    <div className="media" style={{ border: "none", minHeight: "10rem" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          {data.image_url && (
            <img src={data.image_url} className="card-img-top" alt="..." />
          )}
        </div>
        <div className="col-md-8 text-center">
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
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
