import { TYPES } from "./action-types";

const initialState = {
    isAuthenticating: false
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.REQUEST_PERMISSION_START:
            return { isAuthenticating: true }
        case TYPES.USER_CANCELLED_LOGIN:
            return { isAuthenticating: false }
        
        default:
            return state;
    }
}