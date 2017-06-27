import { fromJS } from 'immutable';
import {
  EDIT_NOTE,
  ADD_NEW_NOTE,
} from './../../../constants';

const initialState = fromJS([]);

function generateNewID(state) {
  const ids = state.map(item => {
    return item.get('id');
  });
  if (!ids || !ids.size) {
    return 0;
  }
  return ids.max() + 1;
}


export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_NOTE:
      const id = generateNewID(state);
      action.data.id = id;
      return state.push(
        fromJS(action.data)
      );
    case EDIT_NOTE:
      return state.update(
        state.findIndex((note) => {
          return note.get('id') === action.data.id;
        }), (note) => {
          return action.data;
        }
      );
    default:
      return state;
  }
};
