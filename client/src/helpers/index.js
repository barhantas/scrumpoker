import { call } from 'redux-saga/effects';

export const safeSaga = (saga, ...args) =>
  function*(action) {
    try {
      yield call(saga, ...args, action);
    } catch (error) {
      console.log('caught', error);
    }
  };
