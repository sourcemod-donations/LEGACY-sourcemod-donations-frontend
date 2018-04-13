import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Layout from "./pages/Layout";

const Root = () => (
    <Router>
      <Layout>
        <Route path="/" component={Home}/>
      </Layout>
    </Router>
);

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
