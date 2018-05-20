import * as React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './navigation/navbar';
import Router from './navigation/router';
import { store } from './state';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <React.Fragment>
            <Navbar />
            <Router />
          </React.Fragment>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
