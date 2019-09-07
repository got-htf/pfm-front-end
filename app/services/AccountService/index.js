import BaseService from "../base-service";
import { APIS } from "../../config/api-config";

export default class AccountService {
    static createAccount() {

        url = BaseService.buildUrl(APIS.CREATE_ACCOUNT.URL);
        data = {

        };
        return fetch(url, data);
    }
}