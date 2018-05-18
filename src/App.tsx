import * as React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import Films from './films';
import { store } from './state';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Films />
      </Provider>
    );
  }
}

export default App;
