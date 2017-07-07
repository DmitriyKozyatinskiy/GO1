import {
  SAVE_AUTH,
  EDIT_NOTE,
  ADD_NEW_NOTE,
  ADD_NEW_REPLY,
} from './constants';

export function saveAuth(auth) {
  return {
    type: SAVE_AUTH,
    data: auth,
  };
}

export function addNewNote(note) {
  note.isSaved = false;
  note.timestamp = Date.now();
  return {
    type: ADD_NEW_NOTE,
    data: note,
  };
}

export function saveNote(note) {
  note.isSaved = true;
  note.timestamp = Date.now();
  return {
    type: ADD_NEW_NOTE,
    data: note,
  };
}

export function editNote(note) {
  note.isSaved = true;
  note.timestamp = Date.now();
  return {
    type: EDIT_NOTE,
    data: note,
  };
}

export function addNewReply(reply) {
  reply.timestamp = Date.now();
  return {
    type: ADD_NEW_REPLY,
    data: reply,
  };
}
