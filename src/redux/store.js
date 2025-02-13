import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(mySaga);
export default store;
