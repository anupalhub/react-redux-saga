import actions from '../actions';

const initState = { users: [], isLoading: false, error: null };

export default function UserReducer(state = initState, action) {
    switch (action.type) {
        case actions.FETCH_LIST_OF_USERS_REQUEST:
            return { ...state, isLoading: true, error: null };
        case actions.FETCH_LIST_OF_USERS_SUCCESS:
            return { ...state, users: action.payload, isLoading: false };
        case actions.FETCH_LIST_OF_USERS_FAILURE:
            return { ...state, error: action.error, isLoading: false };
        default:
            return state;
    }
}
