export const createStore = reducer => {
  let internalState = undefined;
  let handlers = [];

  return {
    dispatch: (intent, data) => {
      internalState = reducer(internalState, intent, data);
      handlers.forEach(h => h());
    },
    subscribe: handler => handlers.push(handler),
    getState: () => internalState,
  };
};
