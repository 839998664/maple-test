
import serviceReducer from './serviceReducer';
import providerReducer from './providerReducer';
import initialState from './initialState';
export default function rootReducer(state = initialState, action) {
    return {
        service: serviceReducer(state.service, action),
        provider: providerReducer(state.provider, action)
    }
}
