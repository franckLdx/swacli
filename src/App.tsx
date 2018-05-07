import * as React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import Films from './films';
import logo from './logo.svg';
import { store } from './state';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Films />
        </div>
      </Provider>
    );
  }
}

export default App;
