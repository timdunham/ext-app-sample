import * as React from 'react';
import * as Messages from '../../store/Messages';
import ActionChain from './ActionChain';

const Processing: React.FC = () => {
  const leaveAction = Messages.messageCreators.processing(true, 100, "Processing message from external application...");
  const returnAction = Messages.messageCreators.processing(false);

  return (<div>
    <h3>The <code>processing</code> action</h3>
    <p>This will send the <code>processing</code> action to the Configurator IDS UI.  After 2 seconds, it will send the second the <code>processing</code> action
    again with <code>isProcessing</code> set to <code>false</code> to hide the processing overlay.</p>
    <ActionChain actions={[leaveAction, returnAction]} delay={2000} />
  </div>
  )
};

export default Processing;
