import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { Store } from 'react-chrome-redux';
import { Provider } from 'react-redux';
import { MemoryHistory } from 'react-history';
import 'sanitize.css/sanitize.css';
import 'semantic-ui-css/semantic.min.css';
import './global-styles';

import SignIn from './containers/SignIn';
import Settings from './containers/Settings';
import HighestRated from './containers/HighestRated';
import PageAdded from './containers/PageAdded';
import StartDiscussion from './containers/StartDiscussion';

const proxyStore = new Store({
  portName: 'example'
});

const Wrapper = styled.div`
  width: 410px;
  font-size: 16px;
  line-height: 28px;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
`;

function renderRoute(location) {
  switch(location.pathname) {
    case '/signIn':
      return <SignIn />;
    case '/settings':
      return <Settings />;
    case '/discussions':
      return <HighestRated />;
    case '/pageAdded':
      return <PageAdded />;
    case '/startDiscussion':
      return <StartDiscussion />;
  }
}

render(
  <Provider store={proxyStore}>
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

// {({ history, action, location }) => (
//   history.listen((location, action) => {
//     if (location.pathname  === '/signIn') {
//       <SignIn />
//     } else if (location.pathname === '/settings') {
//       <Settings />
//     }
//     {/*<Settings />*/}
//     {/*<HighestRated />*/}
//   })
// )}