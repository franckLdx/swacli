import * as React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Route from './route';
import { store } from './state';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Route />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
