import { interfaceDataValidationObject } from "../../TypescriptInterfaces/common_interfaces";
import { findUserDetails, handleDataValidation } from "../../utils";
import Toast from "react-native-toast-message";
import firestore from "@react-native-firebase/firestore";
import { setActiveUserEmail, setActiveUserName } from "../actions/userData";
import { getUserList } from "../../firebase/firebaseApiCalls";

interface interfaceApiData {
  email: string;
  password: string;
}

const callSigninApi = (
  validationData: interfaceDataValidationObject[],
  errorList: object,
  setErrorList: Function,
  apiData: interfaceApiData
) => {
  console.log("api data",apiData);
  
  return async (dispatch: Function) => {
    if (!handleDataValidation(validationData, errorList, setErrorList)) {
      const userDetails = findUserDetails(
        apiData.email,
        apiData.password,
        await getUserList()
      );
      console.log("userDetails",userDetails);
      

      if (userDetails.email !== "" && userDetails.name !== "") {
        dispatch(setActiveUserName(userDetails.name));
        dispatch(setActiveUserEmail(userDetails.email));
      } else {
        Toast.show({
          type: "error",
          text1: "Email Doesn't found!! Pease sign up.",
        });
      }
    }
  };
};

export default callSigninApi;
