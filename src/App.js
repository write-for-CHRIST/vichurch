import React, {Component} from 'react';
import Amplify, {Analytics, Storage, API, graphqlOperation} from 'aws-amplify';
import aws_exports from './aws-exports';
import logo from './logo.svg';
import './App.css';
import {listProfiles} from './graphql/queries';

Amplify.configure(aws_exports);
class App extends Component {
  listQuery = async () => {
    console.log('Listing profile...');
    const allProfiles = await API.graphql(graphqlOperation(listProfiles));
    alert(JSON.stringify(allProfiles));
  };

  render() {
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
            rel="noopener noreferrer">
            Learn React
          </a>
          <button onClick={this.listQuery}>getProfiles</button>
        </header>
      </div>
    );
  }
}

export default App;
