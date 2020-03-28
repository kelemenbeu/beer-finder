import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { beers } from './beers.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  beers,
  alert
});

export default rootReducer;