import HttpRequest from "../request";
import { APIS } from "../../config/api-config";

export default class AuthService {
    static loginFacebook = (facebookAccessToken) => {
        const data = {
            body: {
                fb_token: facebookAccessToken
            }
        }

        return new HttpRequest(APIS.LOGIN_FACEBOOK).send(data);
    }
}