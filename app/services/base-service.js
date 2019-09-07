import { API_HOST_NAME, SCHEMA, API_PORT, API_VERSION } from "../config/api-config";

export default class BaseService {
    static buildUrl(resource_path) {
        return `${SCHEMA}//${API_HOST_NAME}:${API_PORT}/${resource_path}`;
    }
}