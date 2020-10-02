import React from 'react';
import './css/App.css'
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path={process.env.PUBLIC_URL} exact component={Home}/>
          <Route path={process.env.PUBLIC_URL + '/products'} exact component={Products}/>
          <Route path={process.env.PUBLIC_URL + '/services'} exact component={Services}/>
          <Route path={process.env.PUBLIC_URL + '/sign-up'} exact component={SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;