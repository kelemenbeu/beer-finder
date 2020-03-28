import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { beerActions } from '../../../actions';

function BeerById() {
    // const beers = useSelector(state => state.beers);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();
    console.log(window.location)

    useEffect(() => {
        dispatch(beerActions.getAll());
    }, [dispatch]);

    return (
        <div className="col-lg-8 offset-lg-2">
            <h1>Hi {user}!</h1>
            <p>You're logged in with React Hooks!!</p>
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );
}

export { BeerById };