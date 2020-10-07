import * as React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../store/ReceivedMessages';

const Finish: React.FC = () => {
  const dispatch = useDispatch();
  const message = "{\n \"action\": \"finishConfiguration\"\n}";
  const sendMessage = () => {
    dispatch(actionCreators.sendMessage(JSON.parse(message)));
  };

  return (<div>
    <h1>Message: <code>finishConfiguration</code></h1>
    This will send the following message to the Configurator IDS UI
    <pre><code>{message}</code></pre>
    <button onClick={sendMessage} className="btn btn-outline-primary">Send Message</button>
  </div>
  )
};

export default Finish;
