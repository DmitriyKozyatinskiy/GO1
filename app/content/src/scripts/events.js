import { getSelectionText } from './utils';
import { ADD_NEW_NOTE_CONTEXT } from './../../../constants';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch(request.type) {
    case ADD_NEW_NOTE_CONTEXT:
      const selection = getSelectionText();
      sendResponse({
        title: selection,
        quoteText: selection,
        type: request.data.type,
      });
      break;
  }
});
