import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPets(action) {
  console.log('fetchPets got an action!', action);

  let response = yield axios({
    method: 'GET',
    url: '/api/pet'
  });

  console.log('GET /pet response', response);

  // Send our pet data to the reducer
  yield put({
    type: 'SET_PETS',
    payload: response.data
  })
}

function* petSaga() {
  yield takeLatest('FETCH_PETS', fetchPets);
}

export default petSaga;