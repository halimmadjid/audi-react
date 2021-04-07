import React from 'react';
import ReactDOM from 'react-dom';
import { Home, CreateCar,Audi, UpdateCar } from './components'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Navbar, Nav } from 'react-bootstrap';
import './styles.css';
import logo from "./assets/img/car_logo.jpeg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Navbar className="NavBar" bg="primary" variant="dark">
      <Navbar.Brand>
        <img
          alt="Car logo"
          src={logo}
          width="60"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link>
        <Link to="/">Home</Link>
        </Nav.Link>
      <Nav.Link>
        <Link to="/Audi">Your Audi</Link>
      </Nav.Link>
    </Nav>
    </Navbar>
    
    <Switch>
      <Route exact path="/">
        <Home title="Home"/>
      </Route>
      <Route path="/CreateCar">
        <CreateCar />
      </Route>
      <Route path="/UpdateCar">
        <UpdateCar />
      </Route>
      <Route path="/Audi">
        <Audi />
      </Route>
    </Switch>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
