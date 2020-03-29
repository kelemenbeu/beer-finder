import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { beerActions } from "../../../actions";
import FramedLayout from "../../../layouts/Framed";

function BeerById({ match }) {
  let params = match.params;
  const beer = useSelector(state => state.beer);
  const user = useSelector(state => state.authentication.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(beerActions.getBeerById(params.id));
  }, [dispatch, params.id]);

  return (
    <FramedLayout userName={user}>
      <div style={{ margin: "2rem" }}>
        {beer.loading && <em>Loading beers...</em>}
        {beer.error && <span className="text-danger">ERROR: {beer.error}</span>}
        {beer.items && <p>{beer.items.name}</p>}
      </div>
    </FramedLayout>
  );
}

export { BeerById };
