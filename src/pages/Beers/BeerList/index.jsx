import React from "react";
import BeerCard from "../../../components/BeerCard";

const BeerList = ({beers}) => (
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5">
        {beers.loading && <em>Loading beers...</em>}
        {beers.error && (
        <span className="text-danger">ERROR: {beers.error}</span>
        )}
        {beers.items &&
        beers.items.map(beer => <BeerCard key={beer.id} data={beer} />)}
    </div>
);

export default BeerList;
