import { TYPES } from "./action-types";

const testAction = (id) => {
    return (dispatch) => {
        console.log(dispatch);
        dispatch({
            type: TYPES.LOGIN
        });
    }
}


export default {
    testAction
}