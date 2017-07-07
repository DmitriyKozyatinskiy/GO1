import { combineReducers } from 'redux-immutable';
import auth from './auth';
import notes from './notes';
import replies from './replies';

export default combineReducers({
  auth,
  notes,
  replies,
});
