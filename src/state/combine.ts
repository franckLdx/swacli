import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Films } from './films';
import { epic as epicReducer, LoadingResourceAction } from "./resource";
import { LoadResourceAction, ResourceLoadedAction } from "./resource";
import { reducer as resourceReducer } from "./resource";
import { canLoadResource, getResource, getResourceState } from "./resource";

export type AppActions = LoadResourceAction | LoadingResourceAction | ResourceLoadedAction;

export const selectors = {
  canLoadResource, getResource, getResourceState
}

export const reducer = combineReducers<AppState>({ films: resourceReducer });

const epic = createEpicMiddleware(epicReducer, {
  dependencies: { selectors }
});

export const middleware = applyMiddleware(epic);

export interface AppState {
  films: Films;
}

export const store = createStore(reducer, middleware);