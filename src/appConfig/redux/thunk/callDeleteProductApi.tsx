import Toast from "react-native-toast-message";
import firestore from "@react-native-firebase/firestore";

const callDeleteProductApi = (docId: string, setEnablePopup: Function) => {
  return (dispatch: Function) => {
    firestore().collection("product_list").doc(docId).delete();
    Toast.show({
      type: "success",
      text1: "Data deleted successfully.",
    });
    setEnablePopup(false);
  };
};

export default callDeleteProductApi;
