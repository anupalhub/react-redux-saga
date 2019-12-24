import { combineReducers } from 'redux';
import Users from './users';
import Posts from './posts';
import Albums from './albums';

const reducers = combineReducers({
    Users,
    Posts,
    Albums
});

export default reducers;
