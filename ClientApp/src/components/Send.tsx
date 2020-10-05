import * as React from 'react';
import { connect } from 'react-redux';

const Send = () => (
  <div>
    <h1>Sending Messages to Configurator</h1>    
  </div>
);

export default connect()(Send);
