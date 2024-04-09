import { interfaceDataValidationObject } from "../../TypescriptInterfaces/common_interfaces";
import { findUserDetails, handleDataValidation } from "../../utils";
import Toast from "react-native-toast-message";
import firestore from "@react-native-firebase/firestore";
import { setActiveUserEmail, setActiveUserName } from "../actions/userData";
import { getUserList } from "../../firebase/firebaseApiCalls";

interface interfaceApiData {
  email: string;
  password: string;
  name: string;
}

const callSignupApi = (
  validationData: interfaceDataValidationObject[],
  errorList: object,
  setErrorList: Function,
  apiData: interfaceApiData
) => {
  return async (dispatch: Function) => {
    if (!handleDataValidation(validationData, errorList, setErrorList)) {
      const userDetails = findUserDetails(
        apiData.email,
        apiData.password,
        await getUserList()
      );
      if (userDetails.email === "" && userDetails.name === "") {
        firestore().collection("user_list").add({
          email: apiData.email,
          name: apiData.name,
          pass: apiData.password,
        });
        dispatch(setActiveUserName(apiData.name));
        dispatch(setActiveUserEmail(apiData.email));
      } else {
        Toast.show({
          type: "error",
          text1: "Email found!! Pease sign in.",
        });
      }
    }
  };
};

export default callSignupApi;
