import { TYPES } from "./action-types";

const initialState = 0;

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.LOGIN:
            return state + 1;

        default:
            return state;
    }
}