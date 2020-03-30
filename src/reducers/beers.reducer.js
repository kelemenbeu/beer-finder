import { beerConstants } from '../constants';

export function beers(state = {}, action) {
  switch (action.type) {
    case beerConstants.GETALLBEERS_REQUEST:
    case beerConstants.GETBEERBYNAME_REQUEST:
      return {
        loading: true
      };
    case beerConstants.GETALLBEERS_SUCCESS:
    case beerConstants.GETBEERBYNAME_SUCCESS:
      return {
        items: action.beers
      };
    case beerConstants.GETALLBEERS_FAILURE:
    case beerConstants.GETBEERBYNAME_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}