import { fromJS } from 'immutable';
import { generateNewID } from './../utils';
import {
  EDIT_NOTE,
  ADD_NEW_NOTE,
} from './../../../constants';

const initialState = fromJS([]);


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
          return fromJS(action.data);
        }
      );
    default:
      return state;
  }
};
