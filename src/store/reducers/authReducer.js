import { loginTypes, registerTypes } from '../types/authTypes';

const INITIAL_STATE = {
    loading: false,
    token: localStorage.getItem('token'),
    isLogin: localStorage.getItem('token') ? true : false,
    errors: [],
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [],
    role: localStorage.getItem('role')
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case loginTypes.REQUEST_LOGIN:
            return {
                ...state,
                loading: true
            };
        case loginTypes.LOGIN_SUCCESS: 
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                isLogin: true
            }
        case loginTypes.LOGIN_FAIL: 
            return {
                ...state, 
                loading: false,
                errors: action.payload.errors
            }
        case loginTypes.LOGOUT:
            return {
                ...state,
                loading: true,
                errors: [],
                token: '',
                isLogin: false
            }
        case loginTypes.GET_USER:
            return {
                ...state,
                loading: true,
                user: action.payload.user,
                role: action.payload.role
            }
        case registerTypes.REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case registerTypes.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                isLogin: true
            }
        case registerTypes.REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload.errors
            }
        default: return state;
    }
};