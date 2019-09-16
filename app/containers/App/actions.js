import { TYPES } from "./action-types";

export const getUserDataSuccess = () => {
    return {
        type: TYPES.GET_USER_DATA_SUCCESS
    }
}

export const getUserDataFailed = () => {
    return {
        type: TYPES.GET_USER_DATA_FAILED
    }
}