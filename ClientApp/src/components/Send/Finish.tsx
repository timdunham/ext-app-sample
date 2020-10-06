import * as React from 'react';

const Finish: React.FC = () => {
  const message = "{ \"action\": \"finishConfiguration\" }";
  const sendMessage = ( )=> {
    window.parent.postMessage(JSON.parse(message), "*");
  };

  return (<div>
    <h1>Message: finishConfiguration</h1>    
    This will send the following message to the Configurator IDS UI
      <pre><code>{message}</code></pre>
      <input type="button" onClick={sendMessage} value="Send Message" />
  </div>
)};

export default Finish;