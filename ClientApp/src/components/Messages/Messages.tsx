import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import * as ReceivedMessages from '../../store/ReceivedMessages';
import Message from './Message';

const Messages: React.FC = () => {
  const state = useSelector((state: ApplicationState) => state.receivedMessages);
  const dispatch = useDispatch();
  const clearMessages = () => { dispatch(ReceivedMessages.actionCreators.clearMessages()); }
  return (<div>
    <h3>Messages</h3>
    <input type="button" onClick={clearMessages} value="Clear Messages" />
    { (!state.received) ? <span>No messages received</span> : state.messages.map( m => <Message {...m} />)} 
  </div>);
}

export default Messages;
