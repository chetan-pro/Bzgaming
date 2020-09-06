import React from 'react';
import Home from './Home';
import Features from './Features';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import signup from './Signup';
import Login from './Login.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route,Redirect } from 'react-router-dom';
import Register from './Register.jsx';

function App() {
  return (
    <>
    
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path='/signup' component={signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App;
