import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getChild() {
  let response = yield axios({
    method: 'GET',
    url: '/child',
  });

  yield put({
    type: 'CHILD_DATA',
    payload: response.data,
  });
}
function* childSaga() {
  yield takeLatest('FETCH_CHILD', getChild);
}

export default childSaga;
