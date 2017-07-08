import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { fromJS } from 'immutable';
import rootReducer from './reducers';
import { wrapStore } from 'react-chrome-redux';
import { createContextMenus } from './contextMenus';

const logger = createLogger();

const store = createStore(
  rootReducer,
  fromJS({}),
  applyMiddleware(logger)
);

wrapStore(store, {
  portName: 'app'
});

createContextMenus(store);
