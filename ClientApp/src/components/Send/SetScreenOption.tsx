import * as React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import * as Messages from '../../store/Messages';
import ActionChain from './ActionChain';

const SetScreenOption: React.FC = () => {
  var [value, setValue] = React.useState("");

  const state = useSelector((state: ApplicationState) => {
    return state.setScreenOption;
  });
  const textRef = React.createRef<HTMLInputElement>();
  const valueToSend = () => (textRef && textRef.current) ? textRef.current.value : ""
  const action = Messages.messageCreators.setScreenOption(state.screenOptionId, value);

  return (
    <div>
      <h3>The <code>setScreenOption</code> action</h3>
      Received a command with the following screen id:
      <pre><code>{state.screenOptionId}</code></pre>
      When you send the action it will take the value in the text box and set the value of the screen option using a message like this:
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text">Enter a value</label>
        </div>
        <input onChange={(e) => setValue(e.target.value)} type="text" className="form-control" placeholder="Value to send to screen option" aria-label="Value to send" aria-describedby="button-addon2" />
      </div>
      <br />
      <ActionChain actions={[action]} />
    </div>
  );
}

export default SetScreenOption;
