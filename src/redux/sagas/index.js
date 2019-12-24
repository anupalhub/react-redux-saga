import { all } from 'redux-saga/effects';
import UsersSagas from './users';
import PostsSagas from './posts';
import AlbumsSagas from './albums';

export default function* rootSaga(getState) {
    yield all([
        UsersSagas(),
        PostsSagas(),
        AlbumsSagas(),
    ]);
}
