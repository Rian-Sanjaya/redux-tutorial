import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// connect components to the store
import { connect } from 'react-redux';
import { updateUser } from './actions/user-actions'

class App extends Component {
  constructor(props) {
    super(props)

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event) {
    // if using onClick event
    // this.props.onUpdateUser("Sammy");

    this.props.onUpdateUser(event.target.value);
  }

  render() {
    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* <div onClick={this.onUpdateUser}>Update user</div> */}
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}

// specificly return state of products and user
const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

const mapActionsToProps = {
  onUpdateUser: updateUser
}

export default connect(mapStateToProps, mapActionsToProps)(App);
