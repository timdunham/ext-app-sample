import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import * as ReceivedMessages from '../../store/ReceivedMessages';

const FocusScreenOption: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: ApplicationState) => {
    return state.focusScreenOptions;
  });
  const createMessage = (first: boolean) => {
    return {
      action: "focusScreenOption",
      screenOptionId: first ? state.screenOptionId : state.screenOptionId2
    }
  };
  const sendMessage = (first: boolean) => {
    dispatch(ReceivedMessages.actionCreators.sendMessage(createMessage(first)));
  }

  return (
    <div>
      <h1>Message: <code>focusScreenOption</code></h1>
      Received a message with the following screen id:
      <pre><code>{state.screenOptionId}</code></pre>
      When you send the message it will take the value in the text box and set the value of the screen option using a message like this:
      <br></br>
      <pre><code>{"{\n \"action\": \"setScreenOption\",\n \"screenOptionId\": \"<screen Option Id>\"\n}"}</code></pre>
      <button onClick={() => sendMessage(true)} className="btn btn-outline-primary">Focus Screen Option 1</button>
      <button onClick={() => sendMessage(false)} className="btn btn-outline-primary">Focus Screen Option 2</button>
    </div>
  );
}

export default FocusScreenOption;
