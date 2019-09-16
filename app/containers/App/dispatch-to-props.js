import { getToken } from '../../helpers/auth/index';
import { getUserDataSuccess, getUserDataFailed } from './actions';

export const getUserData = () => {
    return async(dispatch) => {

        const userData = await getToken();
        if (userData) {
            dispatch(getUserDataSuccess());
        } else {
            dispatch(getUserDataFailed())
        }
    }
}

export default {
    getUserData
}