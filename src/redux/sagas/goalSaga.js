import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//gets recent goals from router
function* fetchGoal(action) {
  let response = yield axios({
    method: 'GET',
    url: action.url,
  });
  yield put({
    type: 'GOAL_DATA',
    payload: response.data,
  });
}
function* goalSaga() {
  yield takeLatest('FETCH_GOAL', fetchGoal);
}

export default goalSaga;
