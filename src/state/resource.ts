import { Action } from "redux";
import { AppActions, AppState } from "./combine";

import { combineEpics, Epic } from 'redux-observable';

export type RESOURCE_STATE = "NOT_LOADED" | "LOADING" | "LOADED" | "ERROR";
export type RESOURCE_ID = "FILMS";

export interface Resource<T> {
  state: RESOURCE_STATE;
  data: T[];
}

export interface LoadResourceAction extends Action {
  type: 'LOAD'
  resourceId: RESOURCE_ID;
}

export const reducer = <T>(action: AppActions): Resource<T> => {
  if (!action) {
    return {
      state: 'NOT_LOADED',
      // tslint:disable-next-line:object-literal-sort-keys
      data: []
    };
  }
  switch (action.type) {
    case 'LOAD':
      return {
        state: 'LOADED',
        // tslint:disable-next-line:object-literal-sort-keys
        data: []
      };
    default:
      return {
        state: 'NOT_LOADED',
        // tslint:disable-next-line:object-literal-sort-keys
        data: []
      };
  }

}

export const loadResource = (resourceId: RESOURCE_ID): LoadResourceAction => {
  return { type: 'LOAD', resourceId };
}

export interface ResourceLoadedAction extends Action {
  type: 'LOADED'
  resourceId: RESOURCE_ID;
}

export const resourceLoaded = (resourceId: RESOURCE_ID): ResourceLoadedAction => {
  return { type: 'LOADED', resourceId };
}

export const onLoadResource: Epic<AppActions, AppState> = (action$, store) =>
  action$
    .ofType('LOAD')
    .delay(1000)
    .merge(
      ({ resourceId }: AppActions) => ({ type: 'LOADED', resourceId })
    );

export const epic = combineEpics(onLoadResource);