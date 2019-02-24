import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import simpleMiddleware from './middlewares/simple-middleware';

import rootService from './service';

import rootReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const enhancers = [
  applyMiddleware(sagaMiddleware),
  applyMiddleware(simpleMiddleware),
];

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const combinedReducer = combineReducers({
  rootReducer,
});

const appReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const store = createStore(appReducer, composeEnhancers(...enhancers));

const combinedServices = [rootService];

combinedServices.forEach((service) => sagaMiddleware.run(service));

export default store;
