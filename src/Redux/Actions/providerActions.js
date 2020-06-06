import * as types from "./actionTypes";
import axios from 'axios';

const FETCH_PROVIDER_URL =
    `https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?
include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10`;

export function filter_providers(result) {
    return { type: types.FILTER_PROVIDERS, result };
}

export function fetch_providers(result) {
    return function (dispatch) {
        dispatch(fetch_providers_begin(result));
        axios.get(FETCH_PROVIDER_URL, {
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
                dispatch(fetch_providers_success(resp.data.data))
            })
            .catch(err => dispatch(fetch_providers_failed(err)));
    }
}

export function fetch_providers_begin(result) {
    return { type: types.FETCH_PROVIDERS_BEGIN, result };
}

export function fetch_providers_success(result) {
    return { type: types.FETCH_PROVIDERS_SUCCESS, result };
}

export function fetch_providers_failed(err) {
    return { type: types.FETCH_PROVIDERS_FAILED, err };
}