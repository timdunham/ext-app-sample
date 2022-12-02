import * as React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import * as Messages from '../../store/Messages';
import ActionChain from './ActionChain';

const ScreenOptionUIData: React.FC = () => {
  const screenOptionUIDataAction = Messages.messageCreators.requestUiData();
  const state = useSelector((state: ApplicationState) => {
    return state.screenOptionUIData;
  });


  return (<div>
    <h3>The <code>screenOptionUIData</code> action</h3>
    <p>This will send the <code>requestUIData</code> action to the Configurator IDS UI.  The UI will return all the UI Data that is currently being displayed</p>
    <ActionChain actions={[screenOptionUIDataAction]} />
    <p>Screen Option details will show below after sending the message to the UI.</p>
    <pre>
      <code>{state.uiData}</code>
    </pre>
  </div>
  )
};

export default ScreenOptionUIData;
