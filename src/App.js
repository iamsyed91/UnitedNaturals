import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PageNotFound from './pages/page-not-found/page-not-found';
import CheckoutPage from './pages/checkout/checkout';
import Header from './component/header/header';
const hist = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={hist}>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={CheckoutPage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;