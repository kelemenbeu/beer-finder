import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { beerActions } from '../../../actions';

function BeerById({ match }) {
    let params = match.params;
    const beer = useSelector(state => state.beer);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(beerActions.getBeerById(params.id));
    }, [dispatch, params.id]);

    return (
        <div className="col-lg-8 offset-lg-2">
            <h1>Hi {user}!</h1>
            {beer.loading && <em>Loading beers...</em>}
            {beer.error && <span className="text-danger">ERROR: {beer.error}</span>}
            {beer.items &&
                <p>{beer.items.name}</p>
            }
        </div>
    );
}

export { BeerById };