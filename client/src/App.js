import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login';
import {connect} from 'react-redux';
import Profile from './containers/Profile';
import * as actions from './store/actions/auth';
import {Container} from 'semantic-ui-react';

//This App component act as a main controler of application
class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    const route = this.props.user.id?
    <Profile user={this.props.user}/>:
    <Login loading={this.props.loading}/>
    
    return (
      <Container>
          {route}
      </Container>
    
    );
  }
}

export default connect(({user,loading})=>({user,loading}),actions)(App);
