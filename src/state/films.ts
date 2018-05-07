import { reducer as resourceReducer, Resource } from "./resource";
import { ActionType } from "./types";

interface Film {
  id: string;
}

export interface Films extends Resource<Film> {

}

export const reducer = (action: ActionType) => resourceReducer<Films>(action);