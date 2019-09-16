import { combineReducers } from "redux";
import { loginReducer } from "../containers/Login/reducer";
import { appContainerReducer } from "../containers/App/reducer";

export default combineReducers({
    login: loginReducer,
    appContainer: appContainerReducer
});