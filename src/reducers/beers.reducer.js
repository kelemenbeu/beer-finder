import { beerConstants } from '../constants';

export function beers(state = {}, action) {
  switch (action.type) {
    case beerConstants.GETALLBEERS_REQUEST:
    case beerConstants.GETBEERBYPARAMS_REQUEST:
      return {
        loading: true
      };
    case beerConstants.GETALLBEERS_SUCCESS:
      return {
        items: action.beers,
        tag: "all"
      };
    case beerConstants.GETBEERBYPARAMS_SUCCESS:
      return {
        items: action.beers,
        tag: "filtered"
      };
    case beerConstants.GETALLBEERS_FAILURE:
    case beerConstants.GETBEERBYPARAMS_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}