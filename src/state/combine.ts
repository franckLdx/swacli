import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import "rxjs/add/operator/delay";
import "rxjs/add/operator/merge";
import { Films } from './films';
import { epic as epicReducer, LoadResourceAction, reducer as resourceReducer } from "./resource";

export type AppActions = LoadResourceAction;

export const reducer = combineReducers<AppState>({ film: resourceReducer });

export const epic = createEpicMiddleware(epicReducer);
export const middleware = applyMiddleware(epic);

export interface AppState {
  films: Films;
}

export const store = createStore(reducer, middleware);