import React from "react";
import { Link } from "react-router-dom";

const BeerCard = ({ data }) => (
  <div className="col">
    <div
      className="card bg-light mb-3"
      style={{ borderRadius: "0.50rem", minHeight: "10rem" }}
    >
      <div className="row no-gutters align-items-end">
        <div className="col-md-4 text-center">
          {data.image_url && (
            <img
              src={data.image_url}
              className="card-img-top"
              alt="..."
              style={{ width: "5rem", height: "15rem" }}
            />
          )}
        </div>
        <div className="col-md-8 text-center">
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">abv: {data.abv}%</p>
            <Link className="btn btn-primary" to={`/beer/${data.id}`}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BeerCard;
