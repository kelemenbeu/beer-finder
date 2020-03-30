import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { alertActions } from "../actions";
import { PrivateRoute } from "../components/PrivateRoute";
import { history } from "../helpers";
import { Beers } from "../pages/Beers";
import { BeerById } from "../pages/Beers/BeerById";
import { Login } from "../pages/Login";

function App() {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen(() => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, [dispatch]);

  return (
    <>
      {alert.message && (
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      )}
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={Beers} />
          <PrivateRoute exact path="/beer/:id" component={BeerById} />
          <Route path="/login" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
}

export { App };
