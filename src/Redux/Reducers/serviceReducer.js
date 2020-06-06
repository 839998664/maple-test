import * as types from "../Actions/actionTypes";
import initialState from "./initialState";

export default function serviceReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_SERVICES_BEGIN:
            return { ...state, isLoading: true, services: [], err: {} };
        case types.FETCH_SERVICES_SUCCESS:
            return { ...state, isLoading: false, services: action.result, err: {} };
        case types.FETCH_SERVICES_FAILED:
            return { ...state, isLoading: false, services: [], err: action.result };
        default:
            return { ...state };
    }
}
