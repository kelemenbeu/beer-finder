import { beerConstants } from '../constants';

export function beer(state = {}, action) {
  switch (action.type) {
    case beerConstants.GETALLBEERBYID_REQUEST:
      return {
        loading: true
      };
    case beerConstants.GETALLBEERBYID_SUCCESS:
      return {
        items: action.beer
      };
    case beerConstants.GETALLBEERBYID_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}