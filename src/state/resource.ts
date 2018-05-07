import { Action } from "redux";
import { ActionType } from ".";

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


export const reducer = <T>(action: ActionType): Resource<T> => {
  return {
    state: 'NOT_LOADED',
    // tslint:disable-next-line:object-literal-sort-keys
    data: []
  };
}


export const loadResource = (resourceId: RESOURCE_ID): LoadResourceAction => {
  return { type: 'LOAD', resourceId };
}