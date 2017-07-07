import { fromJS } from 'immutable';
import {
  SAVE_AUTH,
} from './../../../constants';

const initialState = fromJS({});

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_AUTH:
      return state.merge(
        fromJS(action.data)
      );
    default:
      return state;
  }
};
