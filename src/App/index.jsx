import React from 'react';
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { history } from '../helpers';
// import { alertActions } from '../actions';
import { PrivateRoute } from '../components';
import { Beers } from '../pages/Beers'
import { BeerById } from '../pages/Beers/BeerById'
import { Login } from '../pages/Login';

function App() {
    const alert = useSelector(state => state.alert);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     history.listen(() => {
    //         // clear alert on location change
    //         dispatch(alertActions.clear());
    //     });
    // }, [dispatch]);

    return (
        <div className="jumbotron">
            <div className="container">
                <div className="col-md-8 offset-md-2">
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>
                        <Switch>
                            <PrivateRoute exact path="/" component={Beers} />
                            <PrivateRoute exact path="/beer/:id" component={BeerById} />
                            <Route path="/login" component={Login} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export { App };