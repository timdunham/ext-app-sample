import * as React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

const ExternalApplicationDisplayed: React.FC = () => {
  const state = useSelector((state: ApplicationState) => {
    return state.externalApplicationDisplayed;
  });

  return (<div>
    <h3>The <code>ExternalApplicationDisplayed</code> message</h3>
    <p>The <code>ExternalApplicationDisplayed</code> message was received from the UI.  It was invoked by the <code>{state.screenOptionId}</code> screen option.</p>    
  </div>
  )
};

export default ExternalApplicationDisplayed;
