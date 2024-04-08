import {
  interfaceReduxAction,
  interfaceActiveUser,
} from "../../TypescriptInterfaces/redux_interfaces";

const initialUserData: interfaceActiveUser = {
  activeUserName: "",
  activeUserEmail: "",
};

const userData = (
  state: interfaceActiveUser = initialUserData,
  action: interfaceReduxAction
) => {
  switch (action.type) {
    case "setActiveUserName":
      return {
        ...state,
        activeUserName: action.payload,
      };
    case "setActiveUserEmail":
      return {
        ...state,
        activeUserEmail: action.payload,
      };
    case "setLogout":
      return {
        ...state,
        activeUserName: "",
        activeUserEmail: "",
      };
    default:
      return state;
  }
};

export default userData;
