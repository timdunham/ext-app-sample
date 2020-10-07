import * as React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../store/ReceivedMessages';

const Processing: React.FC = () => {
  const dispatch = useDispatch();
  const messageStart = "{\n \"action\": \"processing\",\n \"delay\": 500,\n \"isProcessing\": true,\n \"message\": \"Processing message from external application...\"\n}";
  const messageEnd = "{\n \"action\": \"processing\",\n \"isProcessing\": false\n}";
  const sendMessage = () => {
    dispatch(actionCreators.sendMessage(JSON.parse(messageStart)));
    window.setTimeout(() => dispatch(actionCreators.sendMessage(JSON.parse(messageEnd))), 2000);
  };

  return (<div>
    <h1>Message: <code>processing</code></h1>
    This will send the following message to the Configurator IDS UI
    <pre><code>{messageStart}</code></pre>
    After 2 seconds, the following message will be sent to remove the processing message:
    <pre><code>{messageEnd}</code></pre>
    <input type="button" onClick={sendMessage} value="Send Message" />
  </div>
  )
};

export default Processing;
