import * as React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../store/ReceivedMessages';
import * as Messages from '../../store/Messages';

const format = Messages.FormatMessage;

const DisplayInformationPane: React.FC = () => {
  const dispatch = useDispatch();
  const selectRef = React.createRef<HTMLSelectElement>();
  const value = () => selectRef && selectRef.current ? selectRef.current.value : "<pane e.g. image, detail>"

  const startAction = Messages.messageCreators.displayInformationPane("PANE");
  const endAction = Messages.messageCreators.displayInformationPane("externalapplication");
  const sendAction = () => {
    dispatch(actionCreators.sendMessage(Messages.messageCreators.displayInformationPane(value())));
    window.setTimeout(() => dispatch(actionCreators.sendMessage(endAction)), 2000);
  };


  return (<div>
    <h3>The <code>displayInformationPane</code> action</h3>
    <p>This page will send the following action to the Configurator IDS UI</p>
    <pre><code>{format(startAction)}</code></pre>
    <p>After 2 seconds, the following action will be sent to return to this tab</p>
    <pre><code>{format(endAction)}</code></pre>
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
        <button onClick={sendAction} className="btn btn-outline-primary" type="button">Send Action</button>
      </div>
    </div>
  </div>
  )
};

export default DisplayInformationPane;
