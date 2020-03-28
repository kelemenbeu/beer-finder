import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Paginator from 'react-hooks-paginator';
import FramedLayout from "../../layouts/Framed"

import { beerActions } from '../../actions';

function Beers() {
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const beers = useSelector(state => state.beers);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(beerActions.getAll(currentPage));
    }, [dispatch, currentPage]);

    console.log(currentPage, offset)

    return (
        <FramedLayout userName={user}>
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
                            <Link to={`/beer/${beer.id}`}>
                            {beer.name + ' ' + beer.abv + ' %'}
                            </Link>
                        </li>
                    )}
                </ul>
            }
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
        <Paginator
            totalRecords={325}
            pageLimit={25}
            pageNeighbours={0}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />
        </FramedLayout>
    );
}

export { Beers };