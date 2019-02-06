export const createStore = (reducer, defaultState) => {
  let internalState = defaultState;
  let handlers = [];

  return {
    dispatch: (intent) => {
      internalState = reducer(internalState, intent);
      handlers.forEach(h => h());
    },
    subscribe: handler => handlers.push(handler),
    getState: () => internalState,
  };
};
