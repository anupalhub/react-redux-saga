import actions from '../actions';

const initState = { albums: [], isLoading: false, isLoading1: false, error: null, photos: [] };

export default function AlbumsReducer(state = initState, action) {
    switch (action.type) {
        case actions.FETCH_LIST_OF_ALBUMS_REQUEST:
            return { ...state, isLoading: true, error: null };
        case actions.FETCH_LIST_OF_PHOTOS_REQUEST:
            return { ...state, isLoading1: true, error: null };
        case actions.FETCH_LIST_OF_ALBUMS_SUCCESS:
            return { ...state, albums: action.payload, isLoading: false };
        case actions.FETCH_LIST_OF_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload, isLoading1: false };
        case actions.FETCH_LIST_OF_ALBUMS_FAILURE:
            return { ...state, error: action.error, isLoading: false };
        case actions.FETCH_LIST_OF_PHOTOS_FAILURE:
            return { ...state, error: action.error, isLoading1: false };
        default:
            return state;
    }
}
