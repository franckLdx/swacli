import { Action } from "redux";
import { AppActions, AppState } from "./combine";

import { combineEpics, Epic } from 'redux-observable';
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators/mergeMap';

export type RESOURCE_STATE = "NOT_LOADED" | "LOADING" | "LOADED" | "ERROR";
export type RESOURCE_TYPE = "FILMS";

export interface Resource<T> {
  state: RESOURCE_STATE;
  data: T[];
}

export const getResource = (state: AppState, resourceType: RESOURCE_TYPE): Resource<any> => state[resourceType];
export const getResourceState = (state: AppState, resourceType: RESOURCE_TYPE): RESOURCE_STATE => getResource(state, resourceType).state;
export const canLoadResource = (state: AppState, resourceType: RESOURCE_TYPE): boolean => getResourceState(state, resourceType) in ['NOT_LOADED', 'ERROR'];

export const reducer = <T>(previousResource: Resource<T>, action: AppActions): Resource<T> => {
  if (!previousResource) {
    return {
      state: 'NOT_LOADED',
      // tslint:disable-next-line:object-literal-sort-keys
      data: []
    };
  }
  return previousResource;
}

export interface LoadResourceAction extends Action {
  type: 'LOAD'
  resourceId: RESOURCE_TYPE;
}
export const loadResource = (resourceId: RESOURCE_TYPE): LoadResourceAction => {
  return { type: 'LOAD', resourceId };
}

export interface LoadingResourceAction extends Action {
  type: 'LOADING'
  resourceId: RESOURCE_TYPE;
}
export const loadingResource = (resourceId: RESOURCE_TYPE): LoadingResourceAction => {
  return { type: 'LOADING', resourceId };
}

export interface ResourceLoadedAction extends Action {
  type: 'LOADED'
  resourceId: RESOURCE_TYPE;
}
export const resourceLoaded = (resourceId: RESOURCE_TYPE): ResourceLoadedAction => {
  return { type: 'LOADED', resourceId };
}

export const onLoadResource: Epic<AppActions, AppState> = (action$) =>
  action$.pipe(
    ofType('LOAD'),
    mergeMap(() => [loadingResource('FILMS'), resourceLoaded('FILMS')])
  );

export const epic = combineEpics(onLoadResource);
