import React from 'react';
import Home from './pages/Home';
import './App.css';
import { BrowserRouter as Router,Redirect,Route,Switch } from 'react-router-dom';
import Cart from './components/Cart';

function App() {
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
