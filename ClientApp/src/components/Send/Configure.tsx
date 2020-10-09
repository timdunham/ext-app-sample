import * as React from 'react';
import * as Messages from '../../store/Messages';
import Action from './Action';

const format = Messages.FormatMessage;
const Configure: React.FC = () => {
  const action = Messages.messageCreators.configure();

  return (<div>
    <h3>The <code>configure</code> action</h3>    
    <p>This page will send the following action to the Configurator IDS UI</p>
    <Action action={action} />
  </div>
)};

export default Configure;
