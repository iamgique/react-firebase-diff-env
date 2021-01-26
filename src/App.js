import React, { Component } from 'react';
import './App.css';

import firebase from 'firebase/app';

class App extends Component {
  constructor(props){
      super(props);
      const config = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID,
        measurementId: process.env.REACT_APP_MEASUREMENT_ID
      };
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      }
  }
  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <p>
              {process.env.REACT_APP_PROJECT_ID}
            </p>
          </header>
        </div>
      </>
    );
  }
}

export default App;
