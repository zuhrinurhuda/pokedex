import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(
      rootReducer,
      applyMiddleware(sagaMiddleware)
    ),
    runSaga: sagaMiddleware.run,
  };
};

export default configureStore;
