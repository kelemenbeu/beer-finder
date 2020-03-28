import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <p>You're logged in with React Hooks!!</p>
            {beer.loading && <em>Loading beers...</em>}
            {beer.error && <span className="text-danger">ERROR: {beer.error}</span>}
            {beer.items &&
                <p>{beer.items.name}</p>
            }
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );
}

export { BeerById };