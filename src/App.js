import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
