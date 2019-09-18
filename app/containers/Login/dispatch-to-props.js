import { TYPES } from "./action-types";
import { 
    requestFacebookPermissionSuccess, 
    requestFacebookPermissionFailed, 
    userCancelledLogin,
    serverAuthFailed,
    serverAuthSuccess,
    startRequestFacebookPermission
} from "./actions";
import { LoginManager, AccessToken } from "react-native-fbsdk";
import HttpRequest from "../../services/request";
import { APIS } from "../../config/api-config";
import { storeToken } from "../../helpers/auth";

export const handleFacebookLogin = () => {
    return async(dispatch) => {
        dispatch(startRequestFacebookPermission());
        const login = await LoginManager.logInWithPermissions(["public_profile"]);
        if (login.isCancelled) {
            dispatch(userCancelledLogin());
            return null;
        }
        const accessData = await AccessToken.getCurrentAccessToken();

        if (accessData && accessData.accessToken) {
            dispatch(requestFacebookPermissionSuccess())
            return await authenticate(dispatch, accessData.accessToken);
        }

        dispatch(requestFacebookPermissionFailed());

        return null;
    }
}

const authenticate = async (dispatch, accessToken) => {
    const data = {
        body: {
            service: 'fb',
            serviceId: accessToken
        }
    };
    const response = await new HttpRequest(APIS.LOGIN_FACEBOOK).send(data);
    const json = await response.json();
    if (json) {
        await storeToken(json);
        dispatch(serverAuthSuccess());
    } else {
        dispatch(serverAuthFailed());
    }
    return json;
}