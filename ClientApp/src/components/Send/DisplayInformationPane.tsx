import * as React from 'react';
import * as Messages from '../../store/Messages';
import ActionChain from './ActionChain';

const DisplayInformationPane: React.FC = () => {
  const [pane, setPane] = React.useState("image");

  const startAction = Messages.messageCreators.displayInformationPane(pane);
  const endAction = Messages.messageCreators.displayInformationPane("externalapplication");


  return (<div>
    <h3>The <code>displayInformationPane</code> action</h3>
    <p>This <code>displayInformationPane</code> action cuases the Configurator IDS UI to display the selected information pane.  
    After 2 seconds, the <code>displayInformationPane</code> action is sent again to return to this tab</p>
    <div className="input-group">
      <div className="input-group-prepend">
        <label className="input-group-text">Select a Pane</label> 
      </div>
      <select onChange={(e)=> setPane(e.target.value)} className="custom-select" aria-label="Example select with button addon">
        <option>image</option>
        <option>detail</option>
        <option>informationlink</option>
        <option>summary</option>
        <option>table</option>
        <option>datagrid</option>
      </select>
    </div>
    <br/>
    <ActionChain actions={[startAction, endAction]} delay={2000} />
  </div>
  )
};

export default DisplayInformationPane;
