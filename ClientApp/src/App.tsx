import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Send from './components/Send';
import Receive from './components/Receive';

import './custom.css'
import ConfiguratorEventListener from './components/ConfiguratorEventListener';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/send' component={Send} />
        <Route path='/receive' component={Receive} />
        <ConfiguratorEventListener />
    </Layout>
);
