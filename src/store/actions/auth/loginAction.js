import {loginTypes} from '../../types';
import { Api } from '../../../constants';

export const requestLogin = () => {
    return {
        type: loginTypes.REQUEST_LOGIN
    };
};

export const loginSuccess = (token) => {
    return {
        type: loginTypes.LOGIN_SUCCESS,
        payload: {
            token
        }
    }
}

export const logoutRequest = () => {
    return {
        type: loginTypes.LOGOUT
    }
}

export const loginFail = (errors) => {
    return {
        type: loginTypes.LOGIN_FAIL,
        payload: {
            errors
        }
    }
}

export const getUserCredentials = (user, role) => {
    return {
        type: loginTypes.GET_USER,
        payload: {
            user,
            role
        }
    }
}

export const login = (data) => dispatch => {
    dispatch(requestLogin());
    const user = {
        email: data.email,
        password: data.password
    }
    axios.post(Api.LOGIN , user)
        .then((res) => {
            const token = res.data.access_token;
            dispatch(loginSuccess(token))
            localStorage.setItem('token', token);
        })
        .catch((err) => {
            dispatch(loginFail(err.response.data))
        })
}

export const logout = () => dispatch => {
    dispatch(logoutRequest())
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
}

export const getUser = () => dispatch => {
    const token = localStorage.getItem('token')
    axios.get(Api.USER, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }) 
    .then((res) => {
        dispatch(getUserCredentials(res.data.user, res.data.role));
        const user = JSON.stringify(res.data.user)
        localStorage.setItem('role', res.data.role)
        localStorage.setItem('user', user);
    })
    .then((err) => {
        console.log(err)
    })
}