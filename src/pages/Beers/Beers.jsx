import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../actions';

function Beers() {
    const beers = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    }, [dispatch]);

    return (
        <div className="col-lg-8 offset-lg-2">
            <h1>Hi {user}!</h1>
            <p>You're logged in with React Hooks!!</p>
            <h3>All beers:</h3>
            {beers.loading && <em>Loading beers...</em>}
            {beers.error && <span className="text-danger">ERROR: {beers.error}</span>}
            {beers.items &&
                <ul>
                    {beers.items.map((beer) =>
                        <li key={beer.id}>
                            {beer.name + ' ' + beer.abv + ' %'}
                        </li>
                    )}
                </ul>
            }
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );
}

export { Beers };