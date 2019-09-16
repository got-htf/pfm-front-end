import { TYPES } from "./action-types";
import { 
    requestFacebookPermissionSuccess, 
    requestFacebookPermissionFailed, 
    userCancelledLogin,
    serverAuthFailed,
    serverAuthSuccess
} from "./actions";
import { LoginManager, AccessToken } from "react-native-fbsdk";
import HttpRequest from "../../services/request";
import { APIS } from "../../config/api-config";
import { storeToken } from "../../helpers/auth";

const handleFacebookLogin = () => {
    return async(dispatch) => {
        const login = await LoginManager.logInWithPermissions(["public_profile"]);
        if (login.isCancelled) {
            return dispatch(userCancelledLogin());
        }
        const accessData = await AccessToken.getCurrentAccessToken();
        await authenticate(dispatch, accessData.accessToken);
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
}


export default {
    handleFacebookLogin
}