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

  yield axios({
    method: 'DELETE',
    url: action.url,
  });
  yield put({
    type: 'FETCH_EVENT',
  });
}

//get request for edit of a specific event
function* editEvent(action) {
  console.log('get (edit) request at', action.url);

  let response = yield axios({
    method: 'GET',
    url: action.url,
  });
  yield put({
    type: 'EDIT_DATA',
    payload: response.data,
  });
}

function* putEvent(action) {
  console.log('get (edit) request at', action.url);

  yield axios({
    method: 'PUT',
    url: action.url,
    data: action.payload,
  });
}
function* eventSaga() {
  yield takeLatest('CREATE_EVENT', createEvent);
  yield takeLatest('FETCH_EVENT', fetchEvent);
  yield takeLatest('DELETE_EVENT', deleteEvent);
  yield takeLatest('EDIT_EVENT', editEvent);
  yield takeLatest('PUT_EVENT', putEvent);
}

export default eventSaga;
