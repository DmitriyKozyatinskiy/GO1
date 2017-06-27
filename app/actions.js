import {
  EDIT_NOTE,
  ADD_NEW_NOTE,
} from './constants';


export function addNewNote(note) {
  note.isSaved = false;
  return {
    type: ADD_NEW_NOTE,
    data: note,
  };
}


export function editNote(note) {
  return {
    type: EDIT_NOTE,
    data: note,
  };
}


