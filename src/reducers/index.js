import { combineReducers } from 'redux'
import todos from './todo';
import counter from './counter';
import reducer from './vehicle';

export default combineReducers({
  todos,
  counter,
  reducer
});

