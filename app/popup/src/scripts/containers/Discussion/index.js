import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageTitle from './../../components/PageTitle';
import DiscussionTitle from './../../components/DiscussionTitle';
import DiscussionHeader from './../../components/DiscussionHeader';
import QuoteArea from './../../components/QuoteArea';
import DiscussionMainText from './../../components/DiscussionMainText';
import DiscussionInfoPanel from './../../components/DiscussionInfoPanel';
import Reply from './../../components/Reply';
import ReplyForm from './../../components/ReplyForm';

class Discussion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShownReplies: false,
    };
  }

  onRepliesClick(event) {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        isShownReplies: !prevState.isShownReplies,
      };
    });
  }

  getReplies() {
    const replies = this.props.replies(this.props.discussion.id);
    const { discussion } = this.props;
    const repliesNodes = [];
    const parentReplies = replies.filter(reply => !reply.parentID);
    const childReplies = replies.filter(reply => reply.parentID);

    console.log('REPLIES: ', replies);
    parentReplies.forEach((parentReply, i) => {
      const key = String(0) + String(i);
      repliesNodes.push(<Reply reply={ parentReply }
                               discussion={ discussion }
                               key={ key } />);
      childReplies
        .filter(childReply => childReply.parentID === parentReply.id)
        .forEach((childReply, j) => {
          const key = String(i) + String(j);
          repliesNodes.push(<Reply reply={ childReply }
                                   parentID={ parentReply.id }
                                   discussion={ discussion }
                                   key={ key }
                                   nested />);
        });
    });

    return repliesNodes;
  }

  render() {
    const { discussion } = this.props;
    const replies = this.getReplies();

    return (
      <div className="scrollable">
        <PageTitle text="DISCUSSION" />
        <DiscussionTitle text={ discussion.title } />
        <DiscussionHeader discussion={ discussion } />
        { discussion.quoteText ? <QuoteArea text={ discussion.quoteText } /> : null }
        <DiscussionMainText>{ discussion.text }</DiscussionMainText>
        <DiscussionInfoPanel onRepliesClick={ event => this.onRepliesClick(event) } amountOfReplies={ replies.length } />
        {
          this.state.isShownReplies
            ? <div>
                { replies }
                <ReplyForm discussion={ discussion } />
              </div>
            : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    replies: (discussionID) => {
      return state.replies.filter((reply) => {
        return reply.discussionID === discussionID;
      }).sort((replyA, replyB) => {
        return replyA.timestamp - replyB.timestamp;
      });
    },
  };
};

export default connect(mapStateToProps)(Discussion);
