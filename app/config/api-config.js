export const SCHEMA = 'http';
export const API_HOST_NAME = 'localhost';
export const API_PORT = 3000;
export const API_VERSION = '';
export const APIS = {
    CREATE_ACCOUNT: {
        method: 'POST',
        path: '/users',
    },
    LOGIN_FACEBOOK: {
        method: 'POST',
        path: '/auth/login'
    }
}