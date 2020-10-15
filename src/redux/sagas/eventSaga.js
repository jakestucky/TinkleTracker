import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* createEvent(action) {
  yield axios({
    method: 'POST',
    url: '/event',
    data: action.payload,
  });
}
function* eventSaga() {
  yield takeLatest('CREATE_EVENT', createEvent);
}

export default eventSaga;
