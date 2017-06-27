/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state;

const makeSelectNotes = () => createSelector(
  selectGlobal,
  (state) => {
    console.log('STATE: ', state);
    return state.get('notes');
  }
);

export {
  makeSelectNotes,
};
