import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';
import { Films } from './films';
import { loadResource, onLoadResource } from './resource';

describe('fetch resource', () => {
  const createMockStore = configureMockStore([createEpicMiddleware(onLoadResource)]);
  interface State { films: Films };

  it('Should successfully fetch', () => {
    const state: State = { films: { state: 'NOT_LOADED', data: [] } };
    createMockStore(state);
    loadResource('FILMS');
  });
});