import Toast from "react-native-toast-message";
import { interfaceDataValidationObject } from "../TypescriptInterfaces/common_interfaces";

const textRegex = /[A-Za-z]+(\s[A-Za-z]+)*/;
const numberRegex = /[0-9]+/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

interface ErrorState {
  [key: string]: any;
}

export const handleDataValidation = (
  data: interfaceDataValidationObject[],
  errorList: object,
  setErrorList: Function
) => {
  let newErrorState: ErrorState = { ...errorList };
  let errorArray = [];
  data.map((val) => {
    if (!val.value.trim()) {
      newErrorState[val.errorName] = `${val.label} cannot be empty !!`;
      errorArray.push(val.label);
    } else {
      switch (val.type) {
        case "text": {
          if (!textRegex.test(val.value)) {
            newErrorState[
              val.errorName
            ] = `Please enter a valid ${val.label} !!`;
            errorArray.push(val.label);
          }
          break;
        }
        case "number": {
          if (!numberRegex.test(val.value)) {
            newErrorState[
              val.errorName
            ] = `Please enter a valid ${val.label} !!`;
            errorArray.push(val.label);
          }
          break;
        }
        case "emailId": {
          if (!emailRegex.test(val.value)) {
            newErrorState[
              val.errorName
            ] = `Please enter a valid ${val.label} !!`;
            errorArray.push(val.label);
          }
          break;
        }
        case "password": {
          if (!passwordRegex.test(val.value)) {
            newErrorState[
              val.errorName
            ] = `Please enter a valid ${val.label} !!`;
            errorArray.push(val.label);
          }
          break;
        }
      }
    }
  });
  setErrorList({ ...newErrorState });
  return errorArray?.length;
};

export const findUserDetails = (email: string, password: string, list: any) => {
  console.log("email-----------------",email,"password",password,"list",list);
  
  let foundName = "";
  let foundEmail = "";

  if (list.length) {
    list?.map((value: any, index: number) => {
      if (value?.email === email && password === value.pass) {
        foundName = value?.name;
        foundEmail = value?.email;
        return null;
      }
    });
  }

  return { name: foundName, email: foundEmail };
};

export const filterProductList = (email: string, list: any) => {
  let newList:any = [];

  if (list.length) {
    list?.map((value: any, index: number) => {
      if (value?.email === email) {
        newList.push(value);
      }
    });
  }

  return newList;
};
