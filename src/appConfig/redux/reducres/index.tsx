import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import userData from "./userData";
import { interfaceReduxAction } from "../../TypescriptInterfaces/redux_interfaces";

const rootReducer = (state: object = {}, action: interfaceReduxAction) => {
  if (action.type === "setSessionDestroy") {
    AsyncStorage.removeItem("persist:root");
    state = {};
  }
  return appReducer(state, action);
};

const appReducer = combineReducers({
  userData: userData,
});

export default rootReducer;
