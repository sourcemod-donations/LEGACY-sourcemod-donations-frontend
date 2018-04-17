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
import AdminLayout from "./components/admin/layout/AdminLayout";
import AdminHomePage from "./pages/admin/AdminHomePage";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AdminProductsListPage from "./pages/admin/products/AdminProductsListPage";
import AdminProductsEditContainer from "./components/admin/products/edit/AdminProductsEditContainer";
import AdminProductsEditPage from "./pages/admin/products/AdminProductsEditPage";
import ProductSingleViewPage from "./pages/ProductSingleViewPage";

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
          <Route exact path={`${path}/home`} component={AdminHomePage}/>
          <Route exact path={`${path}/products`} component={AdminProductsListPage}/>
          <Route path={`${path}/products/:productId`} component={AdminProductsEditPage}/>
          <Redirect to={`${path}/home`}/>
        </Switch>
      </AdminLayout>
  );
};

const ClientRoutes = ({match}) => {
  const {path} = match;

  return (
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path={`/products/:productId`} component={ProductSingleViewPage}/>
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
