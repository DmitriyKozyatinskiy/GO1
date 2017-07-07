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
  
  .scrollable {
    :focus {
      border: 1px solid #31B8DA;
      border-radius: 4px;
    }
    ::placeholder {
      color: #6C7B7F;
    }
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    }
    ::-webkit-scrollbar-thumb {
      background: #cddbe2; 
      box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    }
    ::-webkit-scrollbar-thumb:window-inactive {
      background: #cddbe2;
    }
  }
`;
