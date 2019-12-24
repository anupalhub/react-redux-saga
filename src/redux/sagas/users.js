import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import actions from '../actions';
import ApiService from '../../services';

export function* fetchUserListRequest() {
    yield takeEvery(actions.FETCH_LIST_OF_USERS_REQUEST, function* () {
        const result = yield call(ApiService.usersList);
        if (result.status === 200) {
            yield put({
                type: actions.FETCH_LIST_OF_USERS_SUCCESS,
                payload: result.data,
            });
        } else {
            yield put({ type: actions.FETCH_LIST_OF_USERS_FAILURE, error: result.message });
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(fetchUserListRequest),
    ]);
}
