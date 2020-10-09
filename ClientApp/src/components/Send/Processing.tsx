import * as React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../store/ReceivedMessages';
import * as Messages from '../../store/Messages';

const format = Messages.FormatMessage;
const Processing: React.FC = () => {
  const dispatch = useDispatch();
  const messageStart = Messages.messageCreators.processing(true, 100, "Processing message from external application...");
  const messageEnd = Messages.messageCreators.processing(false);
  const sendMessage = () => {
    dispatch(actionCreators.sendMessage(messageStart));
    window.setTimeout(() => dispatch(actionCreators.sendMessage(messageEnd)), 2000);
  };

  return (<div>
    <h3>The <code>processing</code> action</h3>
    This will send the following action to the Configurator IDS UI
    <pre><code>{format(messageStart)}</code></pre>
    After 2 seconds, the following action will be sent to remove the processing message:
    <pre><code>{format(messageEnd)}</code></pre>
    <button onClick={sendMessage} className="btn btn-outline-primary">Send Message</button>
  </div>
  )
};

export default Processing;
