import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';

import './custom.css'
import ConfiguratorEventListener from './components/ConfiguratorEventListener';
import SetScreenOption from './components/Send/SetScreenOption';
import FocusScreenOption from './components/Send/FocusScreenOption';
import Configure from './components/Send/Configure';
import Finish from './components/Send/Finish';
import Processing from './components/Send/Processing';
import SaveOutputFile from './components/Send/SaveOutputFile';
import DisplayInformationPane from './components/Send/DisplayInformationPane';
import ExternalApplicationDisplayed from './components/Send/ExternalApplicationDisplayed';
import RequestUIData from './components/Send/RequestUIData';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/send/setScreenOption' component={SetScreenOption} />
        <Route path='/send/focusScreenOption' component={FocusScreenOption} />
        <Route path='/send/saveOutputFile' component={SaveOutputFile} />
        <Route path='/send/configure' component={Configure} />
        <Route path='/send/finish' component={Finish} />
        <Route path='/send/displayInformationPane' component={DisplayInformationPane} />
        <Route path='/send/requestUiData' component={RequestUIData} />
        <Route path='/send/processing' component={Processing} />
        <Route path='/receive/externalApplicationDisplayed' component={ExternalApplicationDisplayed} />
        <ConfiguratorEventListener />
    </Layout>
);
