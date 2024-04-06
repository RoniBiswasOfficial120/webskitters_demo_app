import {
  interfaceReduxAction,
  interfaceUserData,
} from "../../TypescriptInterfaces/redux_interfaces";

const initialUserData: interfaceUserData = {
  auth: false,
  list: [],
};

const userData = (
  state: interfaceUserData = initialUserData,
  action: interfaceReduxAction
) => {
  switch (action.type) {
    case "setCreateUser":
      return {
        ...state,
        list: [
          ...state.list,
          {
            name: action.payload.name,
            email: action.payload.email,
            password: action.payload.password,
            productList: [],
          },
        ],
        auth: true,
      };
    case "setLogout":
      return {
        ...state,
        auth: false,
      };

    default:
      return state;
  }
};

export default userData;
