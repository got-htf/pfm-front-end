import { API_HOST_NAME, SCHEMA, API_PORT, API_VERSION } from "../config/api-config";

export default class HttpRequest {
    constructor(config) {
        const authToken = '';
        const port = API_PORT === 80 ? '' : `:${API_PORT}`;
        this.url = `${SCHEMA}://${API_HOST_NAME}${port}${config.path}`;
        this.reqInit =  {
            method: config ? config.method : 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer' + authToken
            },
        };
    }

    send(data = null) {
        if (data && data.body) {
            this.reqInit.body = JSON.stringify(data.body);
        }

        if (data && data.queryParams) {
            for (key in data.queryParams) {
                this.url += `?${item}=${data.queryParams[item]}`;
            }
        }

        console.log(this.url);
        
        return fetch(this.url, this.reqInit);
    }
}