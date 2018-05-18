import { AppActions } from "./combine";
import { reducer as resourceReducer, Resource } from "./resource";

interface Film {
  id: string;
}

export interface Films extends Resource<Film> {

}

export const reducer = (previousResource: Resource<Films>, action: AppActions) => resourceReducer<Films>(previousResource, action);