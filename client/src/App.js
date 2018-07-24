import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login';
import {connect} from 'react-redux';
import { BrowserRouter,Switch, Route} from 'react-router-dom';
import Profile from './containers/Profile';
import * as actions from './store/actions/auth';
class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    console.log(this.props.user)
    const route = this.props.user.id? <Route path="" component={Profile}/>:
    <Route path="/" component={()=><Login loading={this.props.loading}/>}/>;
    return (
      <BrowserRouter>
        <Switch>
          {route}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(({user,loading})=>({user,loading}),actions)(App);
