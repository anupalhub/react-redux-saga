import actions from '../actions';

const initState = { posts: [], isLoading: false, error: null };

export default function PostReducer(state = initState, action) {
    switch (action.type) {
        case actions.FETCH_LIST_OF_POSTS_REQUEST:
            return { ...state, isLoading: true, error: null };
        case actions.FETCH_LIST_OF_POSTS_SUCCESS:
            return { ...state, posts: action.payload, isLoading: false };
        case actions.FETCH_LIST_OF_POSTS_FAILURE:
            return { ...state, error: action.error, isLoading: false };
        default:
            return state;
    }
}
