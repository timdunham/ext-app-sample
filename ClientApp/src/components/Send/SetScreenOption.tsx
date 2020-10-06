import * as React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

const SetScreenOption: React.FC = () => {
  const state = useSelector((state: ApplicationState) => {
    return state.setScreenOption;
  });
  const textRef = React.createRef<HTMLInputElement>();
  const valueToSend = () => (textRef && textRef.current) ? textRef.current.value : ""
  const createMessage = () => {
    return {
      action: "setScreenOption",
      screenOptionId: state.screenOptionId,
      value: valueToSend()
    }

  };
  const sendMessage = () => {
    window.parent.postMessage(createMessage(), "*")
  }

  return (
    <div>
      <h1>Message: setScreenOption</h1>
      Received a message with the following screen id:
      <pre><code>{state.screenOptionId}</code></pre>
      When you send the message it will take the value in the text box and set the value of the screen option using a message like this:
      <br></br>
      <pre><code>{"{"}<br/>
       action: "setScreenOption",<br/>
  screenOptionId: "{state.screenOptionId}", <br/>
  value: "value from text box"<br/> 
{"}"}
      </code></pre>
      <input type="text" ref={textRef} />
      <input type="button" onClick={sendMessage} value="Send Message" />
    </div>
  );
}

export default SetScreenOption;
