import React, { Component } from 'react';
import { Image, Icon, Form } from 'semantic-ui-react';
import styled from 'styled-components';
import ReplyForm from './../../components/ReplyForm';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 0 25px 0 ${ props => props.nested ? '68px' : '25px' };
`;

const TextWrapper = styled.div`
  width: ${ props => props.nested ? '85%' : '88%' };
  float: right;
`;

const InfoWrapper = styled.div`
  vertical-align: super;
  line-height: normal;
  font-size: 14px;
`;

const UserName = styled.span`
  font-weight: bold;
`;

const Text = styled.div`
  font-size: 14px;
  line-height: 1.4;
`;

const ActionIcon = styled.a`
  float: right;
  font-size: 12px;
  cursor: pointer;
`;

const ReplyButton = styled.span`
  color: #6C7B7F;
`;

class Reply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShownInput: false,
    };
  }

  onReplyClick(event) {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        isShownInput: !prevState.isShownInput,
      };
    });
  }

  render() {
    const { reply, discussion, nested } = this.props;

    return (
      <Wrapper className="clearfix" nested={ nested }>
        <Image icon="user" avatar />
        <TextWrapper nested={ nested }>
          <InfoWrapper>
            <UserName>Crystal Torres</UserName>
            {
              nested
                ? null
                : <ActionIcon href="#" style={{ marginLeft: '25px' }}
                              onClick={ event => this.onReplyClick(event) } >
                    <Icon name="reply" link />
                    <ReplyButton>Reply</ReplyButton>
                  </ActionIcon>
            }
            <ActionIcon>
              <Icon name="like outline" fitted link />
              <span> 1</span>
            </ActionIcon>
          </InfoWrapper>
          <Text>{ reply.text }</Text>
        </TextWrapper>

        {
          this.state.isShownInput && !nested
            ? <ReplyForm parentID={ reply.id } discussion={ discussion } nested={ true }  />
            : null
        }

      </Wrapper>
    );
  }
}

export default Reply;
