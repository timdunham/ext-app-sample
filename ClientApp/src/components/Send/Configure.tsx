import * as React from 'react';

const Configure: React.FC = () => {
  const message = "{\n \"action\": \"configure\"\n}";
  const sendMessage = ( )=> {
    window.parent.postMessage(JSON.parse(message), "*");
  };

  return (<div>
    <h1>Message: <code>configure</code></h1>    
    This will send the following message to the Configurator IDS UI
      <pre><code>{message}</code></pre>
      <input type="button" onClick={sendMessage} value="Send Message" />
  </div>
)};

export default Configure;
