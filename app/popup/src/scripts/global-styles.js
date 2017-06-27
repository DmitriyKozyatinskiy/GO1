import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: auto;
  }
  
  .clearfix:before,
  .clearfix:after {
    content: " ";
    display: table;
  }
  .clearfix:after {
    clear: both;
  }
`;
