import * as React from 'react';

const Finish: React.FC = () => {
  const message = "{\n \"action\": \"finishConfiguration\"\n}";
  const sendMessage = ( )=> {
    window.parent.postMessage(JSON.parse(message), "*");
  };

  return (<div>
    <h1>Message: <code>finishConfiguration</code></h1>    
    This will send the following message to the Configurator IDS UI
      <pre><code>{message}</code></pre>
      <input type="button" onClick={sendMessage} value="Send Message" />
  </div>
)};

export default Finish;
