import React from 'react';
import { render } from 'react-dom';
import ShadowDOM from 'react-shadow';
import styled from 'styled-components';
import { Store } from 'react-chrome-redux';
import { Provider } from 'react-redux';
import { MemoryHistory } from 'react-history';
import 'semantic-ui-css/semantic.min.css';
import { globalStyles } from './global-styles';
import './sanitize.scss';
import './styles.scss';

import SignIn from './containers/SignIn';
import Settings from './containers/Settings';
import HighestRated from './containers/HighestRated';
import PageAdded from './containers/PageAdded';
import StartDiscussion from './containers/StartDiscussion';
import Discussion from './containers/Discussion';
import NoNotes from './containers/NoNotes';

console.log('TEST@!!!!!!!!!!!!!');

const proxyStore = new Store({ portName: 'example' });
const anchor = document.createElement('div');
anchor.id = 'go1-anchor';
document.body.insertBefore(anchor, document.body.childNodes[0]);

const Wrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 410px;
  z-index: 99999999;
  font-size: 16px;
  line-height: 28px;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  
  ${ globalStyles }
`;

function renderRoute(location) {
  switch(location.pathname) {
    case '/signIn':
      return <SignIn />;
    // case '/settings':
    //   return <Settings />;
    // case '/noNotes':
    //   return <NoNotes />;
    // case '/highestRated':
    //   return <HighestRated />;
    // case '/pageAdded':
    //   return <PageAdded />;
    // case '/startDiscussion':
    //   return <StartDiscussion />;
    // case '/discussion':
    //   return <Discussion />;
  }
}

const styles = {

};

render(
  <Provider store={ proxyStore }>
    <div id="GO1__App">
      <MemoryHistory initialEntries={ ['/signIn'] }>
        {({location}) => (
          renderRoute(location)
        )}
      </MemoryHistory>
    </div>
  </Provider>
  , anchor
);
