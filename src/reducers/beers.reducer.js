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
    // case beerConstants.DELETE_REQUEST:
    //   // add 'deleting:true' property to user being deleted
    //   return {
    //     ...state,
    //     items: state.items.map(user =>
    //       user.id === action.id
    //         ? { ...user, deleting: true }
    //         : user
    //     )
    //   };
    // case beerConstants.DELETE_SUCCESS:
    //   // remove deleted user from state
    //   return {
    //     items: state.items.filter(user => user.id !== action.id)
    //   };
    // case beerConstants.DELETE_FAILURE:
    //   // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
    //   return {
    //     ...state,
    //     items: state.items.map(user => {
    //       if (user.id === action.id) {
    //         // make copy of user without 'deleting:true' property
    //         const { deleting, ...userCopy } = user;
    //         // return copy of user with 'deleteError:[error]' property
    //         return { ...userCopy, deleteError: action.error };
    //       }

    //       return user;
    //     })
    //   };
    default:
      return state
  }
}