import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {Provider} from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    () => {},
    composeEnhancers(
        applyMiddleware(thunkMiddleware),
    ));

const Root = () => (
    <Provider store={store}>
      <Router>
        <Layout>
          <Route path="/" component={Home}/>
        </Layout>
      </Router>
    </Provider>
);

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
