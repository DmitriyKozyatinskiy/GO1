import { addNewNote } from './../../actions';
import { ADD_NEW_NOTE_CONTEXT } from './../../constants';

export function createContextMenus(store) {
  chrome.contextMenus.create({
    id: 'wrapper',
    title: 'GO1',
    contexts: ['selection'],
  });
  chrome.contextMenus.create({
    id: 'public_note',
    parentId: 'wrapper',
    title: 'Create Note',
    contexts: ['selection'],
    onclick: () => onMenuClick(store, 'public'),
  });
  chrome.contextMenus.create({
    id: 'private_note',
    parentId: 'wrapper',
    title: 'Create Private Note',
    contexts: ['selection'],
    onclick: () => onMenuClick(store, 'private'),
  });
}


function onMenuClick(store, type) {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      type: ADD_NEW_NOTE_CONTEXT,
      data: {
        type
      }
    }, (note) => {
      console.log(note);
      store.dispatch(addNewNote(note));
    });
  });
}
