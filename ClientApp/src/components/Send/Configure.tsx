import * as React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../store/ReceivedMessages';

const Configure: React.FC = () => {
  const dispatch = useDispatch();
  const message = "{\n \"action\": \"configure\"\n}";
  const sendMessage = ( )=> {
    dispatch(actionCreators.sendMessage(JSON.parse(message)));
  };

  return (<div>
    <h1>Message: <code>configure</code></h1>    
    This will send the following message to the Configurator IDS UI
      <pre><code>{message}</code></pre>
      <input type="button" onClick={sendMessage} value="Send Message" />
  </div>
)};

export default Configure;
