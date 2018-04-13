import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from "./pages/Home";

const Root = () => (
    <Router>
      <Route path="/" component={Home} />
    </Router>
);

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
