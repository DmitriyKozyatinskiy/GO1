import { fromJS } from 'immutable';
import { generateNewID } from './../utils';
import {
  ADD_NEW_REPLY,
} from './../../../constants';

const initialState = fromJS([]);


export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_REPLY:
      const id = generateNewID(state);
      action.data.id = id;
      return state.push(
        fromJS(action.data)
      );
    default:
      return state;
  }
};
