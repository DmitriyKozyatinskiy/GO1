import React from 'react';
import { render } from 'react-dom';
import { Store } from 'react-chrome-redux';
import { Provider } from 'react-redux';
import {
  injectIcons,
  injectAnchorNode,
  hasParentWithClass,
  getSelectionText,
  getSelectionCoordinates
} from './utils';
import './events';
import PopupWindow from './components/PopupWindow';

injectIcons();
const proxyStore = new Store({ portName: 'app' });
const anchor = injectAnchorNode();

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
  const data = {
    selection: getSelectionText(),
    coordinates: getSelectionCoordinates(event),
  };
  renderPopup(data);
});
