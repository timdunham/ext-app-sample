import * as React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

const FocusScreenOption: React.FC = () => {
  const state = useSelector((state: ApplicationState) => {
    return state.focusScreenOptions;
  });
  const createMessage = (first: boolean) => {
    return {
      action: "focusScreenOption",
      screenOptionId: first?state.screenOptionId:state.screenOptionId2
    }
  };
  const sendMessage = (first: boolean) => {
    window.parent.postMessage(createMessage(first), "*")
  }

  return (
    <div>
      <h1>Message: <code>focusScreenOption</code></h1>
      Received a message with the following screen id:
      <pre><code>{state.screenOptionId}</code></pre>
      When you send the message it will take the value in the text box and set the value of the screen option using a message like this:
      <br></br>
      <pre><code>{"{\n \"action\": \"setScreenOption\",\n \"screenOptionId\": \"<screen Option Id>\"\n}"}</code></pre>
      <input type="button" onClick={()=>sendMessage(true)} value="Focus Screen Option 1" />
      <input type="button" onClick={()=>sendMessage(false)} value="Focus Screen Option 2" />
    </div>
  );
}

export default FocusScreenOption;
