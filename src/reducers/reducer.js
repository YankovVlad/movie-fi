import { ACTIONS_TYPES } from "../constants/constants"

const initialState = {
    loginDialog: false,
    registrationDialog: false,
    changeDialog: false,

    loading: false,
    loadingElement: false,
    loginEmail: '',
    loginPassword: '',
    user: {},

    movies: [],
    movieList: [],
    movieDetails: {},
    reviews: [],
    userReviews: [],
    error: '',
    visibilityError: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS_TYPES.OPEN_DIALOG_LOGIN: return {...state, loginDialog: true}
        case ACTIONS_TYPES.CLOSE_DIALOG_LOGIN: return {...state, loginDialog: false}

        case ACTIONS_TYPES.OPEN_DIALOG_REGISTRATION: return {...state, registrationDialog: true}
        case ACTIONS_TYPES.CLOSE_DIALOG_REGISTRATION: return {...state, registrationDialog: false}

        case ACTIONS_TYPES.OPEN_DIALOG_CHANGE: return {...state, changeDialog: true}
        case ACTIONS_TYPES.CLOSE_DIALOG_CHANGE: return {...state, changeDialog: false}

        case ACTIONS_TYPES.CHANGE_EMAIL_LOGIN: return {...state, loginEmail: action.payload}
        case ACTIONS_TYPES.CHANGE_PASSWORD_LOGIN: return {...state, loginPassword: action.payload}
        case ACTIONS_TYPES.RESET_FORM_LOGIN: return {...state, loginEmail: '', loginPassword: ''}
        case ACTIONS_TYPES.AUTH_USER: return {...state, user: action.payload}
        case ACTIONS_TYPES.LOGOUT_USER: return {...state, user: null}

        case ACTIONS_TYPES.LOADING_START: return {...state, loading: true}
        case ACTIONS_TYPES.LOADING_SUCCESS: return {...state, loading: false}

        case ACTIONS_TYPES.ERROR: return {...state, loading: false, error: action.payload}
        case ACTIONS_TYPES.RESET_ERROR: return {...state, error: ''}
        case ACTIONS_TYPES.VISIBILITY_ERROR_ON: return {...state, visibilityError: true}
        case ACTIONS_TYPES.VISIBILITY_ERROR_OFF: return {...state, visibilityError: false}

        case ACTIONS_TYPES.LOADING_ELEMENT_START: return {...state, loadingElement: true}
        case ACTIONS_TYPES.LOADING_ELEMENT_SUCCESS: return {...state, loadingElement: false}
        case ACTIONS_TYPES.LOADING_ELEMENT_FAILURE: return {...state, loadingElement: false, errorElement: action.payload}

        case ACTIONS_TYPES.GET_MOVIES: return {...state, movies: action.payload}
        case ACTIONS_TYPES.GET_MOVIE_LIST: return {...state, movieList: action.payload}
        case ACTIONS_TYPES.GET_MOVIE_DETAILS: return {...state, movieDetails: action.payload}
        case ACTIONS_TYPES.GET_REVIEW: return {...state, reviews: action.payload}
        case ACTIONS_TYPES.GET_USER_REVIEW: return {...state, userReviews: action.payload}

    }
    return state
}
