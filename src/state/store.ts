import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import { Films } from "./films";

export interface AppState {
  films: Films;
}

const middleware = applyMiddleware(thunk);

const reducer = () => ({});

export const store = createStore(reducer, middleware);