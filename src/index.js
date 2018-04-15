import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {Provider} from "react-redux";
import rootReducer from "./reducers";
import AdminLayout from "./pages/admin/layout/AdminLayout";
import AdminHome from "./pages/admin/AdminHome";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AdminProductsListContainer from "./pages/admin/products/list/AdminProductsListContainer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunkMiddleware),
    ));

const AdminRoutes = ({match}) => {
  const {path} = match;

  return (

      <AdminLayout>
        <Switch>
          <Route exact path={`${path}/home`} component={AdminHome}/>
          <Route exact path={`${path}/products`} component={AdminProductsListContainer}/>
          <Redirect to={`${path}/home`}/>
        </Switch>
      </AdminLayout>
  );
};

const ClientRoutes = ({matches}) => {
  return (

      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Layout>
  );
};

const Root = () => (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/admin" component={AdminRoutes}/>
          <Route path="/" component={ClientRoutes}/>
        </Switch>
      </Router>
    </Provider>
);

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
