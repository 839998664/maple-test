import * as types from "../Actions/actionTypes";
import initialState from "./initialState";

export default function providerReducer(state = initialState, action) {
    switch (action.type) {
        case types.FILTER_PROVIDERS:
            let filteredProviders = [];
            if (state.providers) {
                let service = action.result;
                filteredProviders = state.providers.filter(fp => {
                    if (fp.attributes.subspecialties.includes(service.attributes.name)) {
                        return fp;
                    };
                    return false;
                });
            }
            return { ...state, providersForSelectedService: [...filteredProviders] }
        case types.FETCH_PROVIDERS_BEGIN:
            return { ...state, isLoading: action.result, providers: [] };
        case types.FETCH_PROVIDERS_SUCCESS:
            return { ...state, isLoading: false, providers: [...action.result] };
        case types.FETCH_PROVIDERS_FAILED:
            return { ...state, isLoading: false, providers: [], err: action.result };
        default:
            return state;
    }
}
