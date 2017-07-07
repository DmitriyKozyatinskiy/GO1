import React from 'react';
import { render } from 'react-dom';
import { fromJS } from 'immutable';
import styled from 'styled-components';
import { Store } from 'react-chrome-redux';
import { Provider } from 'react-redux';
import { MemoryHistory } from 'react-history';
import 'sanitize.css/sanitize.css';
import 'semantic-ui-css/semantic.min.css';
import './global-styles';

import SignIn from './containers/SignIn';
import Settings from './containers/Settings';
import Discussions from './containers/Discussions';
import PageAdded from './containers/PageAdded';
import StartDiscussion from './containers/StartDiscussion';
import Discussion from './containers/Discussion';
import NoNotes from './containers/NoNotes';

const Wrapper = styled.div`
  width: 410px;
  font-size: 16px;
  line-height: 28px;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
`;

function renderRoute(location) {
  console.log('LOCATION: ', location);
  switch(location.pathname) {
    case '/signIn':
      return <SignIn />;
    case '/settings':
      return <Settings />;
    case '/noNotes':
      return <NoNotes />;
    case '/discussions':
      return <Discussions />;
    case '/pageAdded':
      return <PageAdded />;
    case '/startDiscussion':
      return <StartDiscussion discussion={ location.state ? location.state.discussion : {} } />;
    case '/discussion':
      const discussion = location.state ? location.state.discussion : {};
      if (discussion.isSaved) {
        return <Discussion discussion={ discussion } />;
      } else {
        return <StartDiscussion discussion={ discussion } />;
      }
  }
}

const proxyStore = new Store({
  portName: 'app'
});

render(
  <Provider store={ proxyStore }>
    <Wrapper>
      <MemoryHistory initialEntries={ ['/signIn'] }>
        {({location}) => (
          renderRoute(location)
        )}
      </MemoryHistory>
    </Wrapper>
  </Provider>
  , document.getElementById('app')
);
