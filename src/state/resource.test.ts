import { ActionsObservable } from 'redux-observable';
import { TestScheduler } from 'rxjs';
import { AppActions, store } from '.';
import { loadingResource, loadResource, onLoadResource, resourceLoaded } from './resource';

describe('fetch resource', () => {
  const deepEquals = (actual: any, expected: any) => expect(actual).toEqual(expected);
  const createTestScheduler = () => new TestScheduler(deepEquals);

  it('Should successfully fetch', () => {
    const marbles1 = 'a';
    const marbles2 = '(bc)';
    const values = {
      a: loadResource('FILMS'),
      b: loadingResource('FILMS'),
      c: resourceLoaded('FILMS')
    };

    const ts = createTestScheduler();
    const source$: ActionsObservable<AppActions> = ActionsObservable.from(
      ts.createColdObservable(marbles1, values)
    );

    const actual = onLoadResource(source$, store, null);

    ts.expectObservable(actual).toBe(marbles2, values);
    ts.flush();
  });

});