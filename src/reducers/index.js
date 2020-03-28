import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { beers } from './beers.reducer';
import { beer } from './beer.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  beers,
  beer,
  alert
});

export default rootReducer;