import * as React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../store';

const Receive: React.FC = () => {
  const state = useSelector((state: ApplicationState) => state.receivedMessages);
  const noMessagesReceived = () => <span>No messages recevied.  Are you running this within configurator?</span>;
  const renderMessages = () => <ol>{state.messages.map(renderMessage)}</ol>;
  const renderMessage = (m: string) => <li>{m}</li>;

  return (<div>
    <h1>Receive Messages from Configurator</h1>
    { (!state.received) ? noMessagesReceived() : renderMessages()}
  </div>);
}

export default Receive;
