import { interfaceDataValidationObject } from "../../TypescriptInterfaces/common_interfaces";
import { handleDataValidation } from "../../utils";
import Toast from "react-native-toast-message";
import firestore from "@react-native-firebase/firestore";

interface interfaceApiData {
  email: string;
  desc: string;
  discount: string;
  price: string;
  name: string;
}

const callAddProductApi = (
  validationData: interfaceDataValidationObject[],
  errorList: object,
  setErrorList: Function,
  apiData: interfaceApiData,
  setProductName: Function,
  setProductDesc: Function,
  setProductDisc: Function,
  setProductPrice: Function
) => {
  return (dispatch: Function) => {
    if (!handleDataValidation(validationData, errorList, setErrorList)) {
      firestore().collection("product_list").add(apiData);
      Toast.show({
        type: "success",
        text1: "Data added successfully.",
      });
      setProductName("");
      setProductDesc("");
      setProductDisc("");
      setProductPrice("");
    }
  };
};

export default callAddProductApi;
