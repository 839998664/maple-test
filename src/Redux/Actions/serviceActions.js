import * as types from "./actionTypes";
import axios from 'axios';

const FETCH_SERVICES_URL =
    "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services";


export function fetch_services(result) {
    return function (dispatch) {
        dispatch(fetch_services_begin(result));
        axios.get(FETCH_SERVICES_URL, {
            method: 'GET',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/vnd.api+json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer'
        })
            .then(resp => {
                dispatch(fetch_services_success(resp.data.data))
            })
            .catch(err => dispatch(fetch_services_failed(err)));
    }
}

export function fetch_services_begin(result) {
    return { type: types.FETCH_SERVICES_BEGIN, result };
}

export function fetch_services_success(result) {
    return { type: types.FETCH_SERVICES_SUCCESS, result };
}

export function fetch_services_failed(result) {
    return { type: types.FETCH_SERVICES_FAILED, result };
}
