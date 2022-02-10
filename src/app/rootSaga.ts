import { all } from 'redux-saga/effects';

function* helloSaga() {
  console.log('Hello saga');
  yield;
}

export default function* rootSaga() {
  console.log('Root Saga');
  yield all([helloSaga()]);
}
