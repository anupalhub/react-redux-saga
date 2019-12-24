import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import actions from '../actions';
import ApiService from '../../services';

export function* fetchPostsListRequest() {
    yield takeEvery(actions.FETCH_LIST_OF_POSTS_REQUEST, function* () {
        const result = yield call(ApiService.postsList);
        if (result.status === 200) {
            yield put({
                type: actions.FETCH_LIST_OF_POSTS_SUCCESS,
                payload: result.data,
            });
        } else {
            yield put({ type: actions.FETCH_LIST_OF_POSTS_FAILURE, error: result.message });
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(fetchPostsListRequest),
    ]);
}
