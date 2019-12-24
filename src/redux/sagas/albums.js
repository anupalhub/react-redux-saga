import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import actions from '../actions';
import ApiService from '../../services';

export function* fetchAlbumsListRequest() {
    yield takeEvery(actions.FETCH_LIST_OF_ALBUMS_REQUEST, function* () {
        const result = yield call(ApiService.albumsList);
        if (result.status === 200) {
            yield put({
                type: actions.FETCH_LIST_OF_ALBUMS_SUCCESS,
                payload: result.data,
            });
        } else {
            yield put({ type: actions.FETCH_LIST_OF_ALBUMS_FAILURE, error: result.message });
        }
    });
}

export function* fetchPhotosListRequest() {
    yield takeEvery(actions.FETCH_LIST_OF_PHOTOS_REQUEST, function* () {
        const result = yield call(ApiService.photosList);
        if (result.status === 200) {
            yield put({
                type: actions.FETCH_LIST_OF_PHOTOS_SUCCESS,
                payload: result.data,
            });
        } else {
            yield put({ type: actions.FETCH_LIST_OF_PHOTOS_FAILURE, error: result.message });
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(fetchAlbumsListRequest),
        fork(fetchPhotosListRequest),
    ]);
}
