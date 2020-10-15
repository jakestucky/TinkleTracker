import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
//creates a new event post to router
function* createEvent(action) {
  yield axios({
    method: 'POST',
    url: '/event',
    data: action.payload,
  });
}

//gets recent events from router
function* fetchEvent() {
  let response = yield axios({
    method: 'GET',
    url: '/event',
  });
  yield put({
    type: 'EVENT_DATA',
    payload: response.data,
  });
}
function* eventSaga() {
  yield takeLatest('CREATE_EVENT', createEvent);
  yield takeLatest('FETCH_EVENT', fetchEvent);
}

export default eventSaga;
