import { TYPES } from "./action-types";

const initialState = {
    isLoggedIn: false
};

export const appContainerReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_USER_DATA_SUCCESS:
            return {
                isLoggedIn: true
            };
        case TYPES.GET_USER_DATA_FAILED:
            return {
                isLoggedIn: false
            };
        default:
            return state;
    }
}