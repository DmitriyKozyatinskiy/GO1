import React, { Component } from 'react';
import {TextArea, Button} from 'semantic-ui-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: ${ props => props.nested ? '' : '10px 20px' } !important;
  margin-top: 10px;
`;

const StyledInput = styled(TextArea)`
  width: ${ props => props.nested ? '71%' : '83%' } !important;
  min-height: 30px !important;
  max-height: 90px !important;
  height: 30px;
  margin-left: ${ props => props.nested ? '42px' : '0' } !important;
  padding: 5px 10px !important;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
`;

const StyledButton = styled(Button)`
  height: 30px;
  float: right;
  padding: 8px 15px !important;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
`;

class ReplyInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { nested, value, onInputChange } = this.props;

    return (
      <Wrapper nested={ nested }>
        <StyledInput name="text"
                     className="scrollable"
                     action={ { color: 'teal', content: 'Post' } }
                     placeholder="Add a reply" autoHeight
                     nested={ nested }
                     value={ value }
                     onChange={ event => onInputChange(event) } />
        <StyledButton type="submit" primary>Post</StyledButton>
      </Wrapper>
    );
  }
}

export default ReplyInput;
