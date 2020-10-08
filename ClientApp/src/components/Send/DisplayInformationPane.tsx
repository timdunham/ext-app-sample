import * as React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../store/ReceivedMessages';
import * as Messages from '../../store/Messages';

const format = Messages.FormatMessage;

const DisplayInformationPane: React.FC = () => {
  const dispatch = useDispatch();
  const selectRef = React.createRef<HTMLSelectElement>();
  const value = () => selectRef && selectRef.current ? selectRef.current.value : "<pane e.g. image, detail>"

  const messageStart = Messages.messageCreators.displayInformationPane("PANE");
  const messageEnd = Messages.messageCreators.displayInformationPane("externalapplication");
  const sendMessage = () => {
    dispatch(actionCreators.sendMessage(Messages.messageCreators.displayInformationPane(value())));
    window.setTimeout(() => dispatch(actionCreators.sendMessage(messageEnd)), 2000);
  };


  return (<div>
    <h1>Message: <code>displayInformationPane</code></h1>
    This will send the following message to the Configurator IDS UI
    <pre><code>{format(messageStart)}</code></pre>
    After 2 seconds, the following message will be sent to return to this tab:
    <pre><code>{format(messageEnd)}</code></pre>
    <div className="input-group">
      <select ref={selectRef} className="custom-select" aria-label="Example select with button addon">
        <option>image</option>
        <option>detail</option>
        <option>informationlink</option>
        <option>summary</option>
        <option>table</option>
        <option>datagrid</option>
      </select>
      <div className="input-group-append">
        <button onClick={sendMessage} className="btn btn-outline-primary" type="button">Send Message</button>
      </div>
    </div>
  </div>
  )
};

export default DisplayInformationPane;
