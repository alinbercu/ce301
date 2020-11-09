import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import Dashboard  from './components/pages/Dashboard';
import Login  from './components/pages/Login';
import Register  from './components/pages/Register';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
            <Route exact path="/dashboard" component={Dashboard}/>    
            <Route exact path="/login" component={Login}/>   
            <Route exact path="/register" component={Register}/>   
          </div>
        </Router>
      </Provider>
    )
  }  
}

export default App;
