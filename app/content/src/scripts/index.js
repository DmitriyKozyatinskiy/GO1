import React from 'react';
import { render } from 'react-dom';
import { Store } from 'react-chrome-redux';
import { Provider } from 'react-redux';
import PopupWindow from './components/PopupWindow';

const proxyStore = new Store({ portName: 'app' });

const anchor = document.createElement('div');
anchor.id = 'go1-anchor';
anchor.classList.add('go1-anchor');
document.body.insertBefore(anchor, document.body.childNodes[0]);

function hasParentWithClass(element, className) {
  if (element.className && element.className.split(' ').indexOf(className) !== -1) {
    return true;
  } else {
    return element.parentNode && hasParentWithClass(element.parentNode, className);
  }
}

function getSelectionData() {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const area = range.getBoundingClientRect();
  const coordinates = {
    top: area.top + window.scrollY,
    left: area.left + window.scrollX,
  };
  return {
    selection: selection.toString(),
    coordinates: coordinates,
  };
}

function renderPopup(data) {
  render(
    <Provider store={ proxyStore }>
      <PopupWindow selection={ data.selection } coordinates={ data.coordinates } />
    </Provider>
    , anchor
  );
}

document.addEventListener('click', event => {
  const isPopupWindow = hasParentWithClass(event.target, 'go1-anchor');

  if (!isPopupWindow) {
    while (anchor.firstChild) {
      anchor.removeChild(anchor.firstChild);
    }
  }

  if (!event.ctrlKey) {
    return;
  }

  const data = getSelectionData();
  renderPopup(data);
});

