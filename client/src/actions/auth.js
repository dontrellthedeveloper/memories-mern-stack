import { AUTH } from '../constants/actionTypes';

import * as api from '../api/index.jsx';

export const signin = (formData, history) => async (dispatch) => {
    try {
        // log in the user

        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        // log up the user
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}