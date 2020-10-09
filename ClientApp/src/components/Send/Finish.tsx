import * as React from 'react';
import * as Messages from '../../store/Messages';
import Action from './Action';

const Finish: React.FC = () => {
  const action = Messages.messageCreators.finishConfiguration();

  return (<div>
    <h3>The <code>finishConfiguration</code> action</h3>
    <p>This page will send the following action to the Configurator IDS UI</p>
    <Action action={action} />
  </div>
  )
};

export default Finish;
