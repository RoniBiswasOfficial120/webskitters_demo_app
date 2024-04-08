export const setLogout = () => {
  return {
    type: "setLogout",
  };
};

export const setActiveUserName = (val: string) => {
  return {
    type: "setActiveUserName",
    payload: val,
  };
};

export const setActiveUserEmail = (val: string) => {
  return {
    type: "setActiveUserEmail",
    payload: val,
  };
};
