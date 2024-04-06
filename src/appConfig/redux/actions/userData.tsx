import { interfaceUserList } from "../../TypescriptInterfaces/redux_interfaces";

export const setCreateUser = (val: interfaceUserList) => {
  return {
    type: "setCreateUser",
    payload: val,
  };
};

export const setLogout = () => {
  return {
    type: "setLogout",
  };
};
