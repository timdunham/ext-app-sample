import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../store';
import * as ReceivedMessages from '../store/ReceivedMessages';

const Receive: React.FC = () => {
  const state = useSelector((state: ApplicationState) => state.receivedMessages);
  const dispatch = useDispatch();
  const noMessagesReceived = () => <span>No messages recevied.  Are you running this within configurator?</span>;
  const renderMessages = () => <ol>{state.messages.map(renderMessage)}</ol>;
  const renderMessage = (m: string) => <li>{m}</li>;
  const clearMessages = () => { dispatch(ReceivedMessages.actionCreators.clearMessages()); }
  return (<div>
    <h1>Receive Messages from Configurator</h1>
    <input type="button" onClick={clearMessages} value="Clear Messages" />
    { (!state.received) ? noMessagesReceived() : renderMessages()}
  </div>);
}

export default Receive;
