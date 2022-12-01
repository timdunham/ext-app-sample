import * as React from 'react';
import * as Messages from '../../store/Messages';
import ActionChain from './ActionChain';

const ScreenOptionUIData: React.FC = () => {
  const screenOptionUIDataAction = Messages.messageCreators.requestScreenOptionUIData();
  

  return (<div>
    <h3>The <code>screenOptionUIData</code> action</h3>
    <p>This will send the <code>requestScreenOptionUIData</code> action to the Configurator IDS UI.  The UI will return all the UI Data that is currently being displayed</p>
    <ActionChain actions={[screenOptionUIDataAction]} />
    <p>TODO: add textarea with the resulting JSON</p>
  </div>
  )
};

export default ScreenOptionUIData;
