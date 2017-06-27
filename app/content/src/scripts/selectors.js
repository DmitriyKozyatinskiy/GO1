/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const makeSelectNote = () => createSelector(
  (state) => state.get('notes'),
);

export {
  makeSelectNote,
};
