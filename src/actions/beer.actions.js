import { beerConstants } from '../constants';
import { beerService } from '../services';

export const beerActions = {
    getAll,
    getBeerById
};

function getAll() {
    return dispatch => {
        dispatch(request());

        beerService.getAll()
            .then(
                beers => dispatch(success(beers)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: beerConstants.GETALLBEERS_REQUEST } }
    function success(beers) { return { type: beerConstants.GETALLBEERS_SUCCESS, beers } }
    function failure(error) { return { type: beerConstants.GETALLBEERS_FAILURE, error } }
}

function getBeerById(id) {
    return dispatch => {
        dispatch(request());

        beerService.getBeerById(id)
            .then(
                beer => dispatch(success(beer)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: beerConstants.GETALLBEERBYID_REQUEST } }
    function success(beer) { return { type: beerConstants.GETALLBEERBYID_SUCCESS, beer } }
    function failure(error) { return { type: beerConstants.GETALLBEERBYID_FAILURE, error } }
}
