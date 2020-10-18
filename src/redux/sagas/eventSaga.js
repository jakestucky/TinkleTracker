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

//deletes an entry by ID on button push

function* deleteEvent(action) {
  console.log('delete request at', action.url);

  let response = yield axios({
    method: 'DELETE',
    url: action.url,
  });
  yield put({
    type: 'FETCH_EVENT',
  });
}
function* eventSaga() {
  yield takeLatest('CREATE_EVENT', createEvent);
  yield takeLatest('FETCH_EVENT', fetchEvent);
  yield takeLatest('DELETE_EVENT', deleteEvent);
}

export default eventSaga;
