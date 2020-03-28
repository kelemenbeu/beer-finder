import { beerConstants } from '../constants';

export function beers(state = {}, action) {
  switch (action.type) {
    case beerConstants.GETALLBEERS_REQUEST:
      return {
        loading: true
      };
    case beerConstants.GETALLBEERS_SUCCESS:
      return {
        items: action.beers
      };
    case beerConstants.GETALLBEERS_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}