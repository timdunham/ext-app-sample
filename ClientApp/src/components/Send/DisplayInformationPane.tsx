import * as React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../store/ReceivedMessages';

const DisplayInformationPane: React.FC = () => {
  const dispatch = useDispatch();
  const selectRef = React.createRef<HTMLSelectElement>();
  const messageStart = "{\n \"action\": \"displayInformationPane\",\n \"pane\": \"<pane e.g. image, detail>\"\n}";
  const messageEnd = "{\n \"action\": \"displayInformationPane\",\n \"pane\": \"externalapplication\"\n}";
  const sendMessage = () => {
    if (selectRef && selectRef.current && selectRef.current.value) {
      const message = {
        pane: selectRef.current.value,
        action: "displayInformationPane"
      };
      dispatch(actionCreators.sendMessage(message));
      window.setTimeout(() => dispatch(actionCreators.sendMessage(JSON.parse(messageEnd))), 2000);
    }
  };

  return (<div>
    <h1>Message: <code>displayInformationPane</code></h1>
    This will send the following message to the Configurator IDS UI
    <pre><code>{messageStart}</code></pre>
    After 2 seconds, the following message will be sent to return to this tab:
    <pre><code>{messageEnd}</code></pre>
    <select ref={selectRef}>
      <option>image</option>
      <option>detail</option>
      <option>informationlink</option>
      <option>summary</option>
      <option>table</option>
      <option>datagrid</option>
    </select>
    <input type="button" onClick={sendMessage} value="Send Message" />
  </div>
  )
};

export default DisplayInformationPane;
