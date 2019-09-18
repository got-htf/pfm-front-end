import { TYPES } from "./action-types";

export const loginFacebook = () => {
    return {
        type: TYPES.LOGIN
    }
}

export const startRequestFacebookPermission = () => {
    return {
        type: TYPES.REQUEST_PERMISSION_START
    }
}

export const requestFacebookPermissionSuccess = () => {
    return {
        type: TYPES.REQUEST_PERMISSION_SUCCESS
    }
}

export const requestFacebookPermissionFailed = () => {
    return {
        type: TYPES.REQUEST_PERMISSION_FAILED
    }
}

export const userCancelledLogin = () => {
    return {
        type: TYPES.USER_CANCELLED_LOGIN
    }
}

export const serverAuthSuccess = () => {
    return {
        type: TYPES.SERVER_AUTH_SUCCESS
    }
}

export const serverAuthFailed = () => {
    return {
        type: TYPES.SERVER_AUTH_FAILED
    }
}