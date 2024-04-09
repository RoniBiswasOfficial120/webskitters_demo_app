import { interfaceDataValidationObject } from "../../TypescriptInterfaces/common_interfaces";
import { handleDataValidation } from "../../utils";
import firestore from "@react-native-firebase/firestore";

interface interfaceApiData {
  desc: string;
  discount: string;
  name: string;
  price: string;
  email: string;
}

const callEditProductApi = (
  validationData: interfaceDataValidationObject[],
  errorList: object,
  setErrorList: Function,
  apiData: interfaceApiData,
  docId: string,
  setEnablePopup: Function
) => {
  return (dispatch: Function) => {
    if (!handleDataValidation(validationData, errorList, setErrorList)) {
      firestore().collection("product_list").doc(docId).update(apiData);
      setEnablePopup(false);
    }
  };
};

export default callEditProductApi;
