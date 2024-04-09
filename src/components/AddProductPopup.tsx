import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTextbox from "./CustomTextBox";
import { useState } from "react";
import { useAppDispatch } from "../appConfig/redux";
import callAddProductApi from "../appConfig/redux/thunk/callAddProductApi";

interface compParam {
  email: string;
  setEnablePopup: Function;
}

const AddProductPopup = ({ email, setEnablePopup }: compParam) => {
  const { height, width } = useWindowDimensions();
  const styles = useStyles(height, width);
  const dispatch = useAppDispatch();
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productDisc, setProductDisc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [errorList, setErrorList] = useState({
    productName: "",
    productDesc: "",
    productPrice: "",
    productDisc: "",
  });

  const handleAddProduct = () => {
    const validationData = [
      {
        label: "Name",
        value: productName,
        type: "text",
        errorName: "productName",
      },
      {
        label: "Price",
        value: productPrice,
        type: "number",
        errorName: "productPrice",
      },
      {
        label: "Description",
        value: productDesc,
        type: "text",
        errorName: "productDesc",
      },
      {
        label: "Discount",
        value: productDisc,
        type: "number",
        errorName: "productDisc",
      },
    ];
    const apiData = {
      desc: productDesc,
      discount: productDisc,
      price: productPrice,
      name: productName,
      email: email,
    };
    dispatch(
      callAddProductApi(
        validationData,
        errorList,
        setErrorList,
        apiData,
        setProductName,
        setProductDesc,
        setProductDisc,
        setProductPrice
      )
    );
  };

  return (
    <View style={styles.popupMaincontainer}>
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={() => setEnablePopup(false)}>
          <View style={styles.mainContainer}>
            <TouchableWithoutFeedback
              onPress={(event) => event.preventDefault()}
            >
              <View style={styles.innerContainer}>
                <Text style={styles.textStyle}>Add product</Text>
                <CustomTextbox
                  label="Product Name"
                  placeholder="Enter Product Name . . ."
                  value={productName}
                  setValue={setProductName}
                  errorList={errorList}
                  setErrorList={setErrorList}
                  errorName={"productName"}
                />
                <CustomTextbox
                  label="Product Description"
                  placeholder="Enter Product Description . . ."
                  value={productDesc}
                  setValue={setProductDesc}
                  errorList={errorList}
                  setErrorList={setErrorList}
                  errorName={"productDesc"}
                />
                <CustomTextbox
                  label="Price"
                  placeholder="Enter Price . . ."
                  value={productPrice}
                  setValue={setProductPrice}
                  errorList={errorList}
                  setErrorList={setErrorList}
                  errorName={"productPrice"}
                />
                <CustomTextbox
                  label="Discount"
                  placeholder="Enter Discount . . ."
                  value={productDisc}
                  setValue={setProductDisc}
                  errorList={errorList}
                  setErrorList={setErrorList}
                  errorName={"productDisc"}
                />
                <TouchableOpacity
                  onPress={() => handleAddProduct()}
                  style={styles.buttonStyle}
                >
                  <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
};

export default AddProductPopup;

const useStyles = (_height: number, _width: number) =>
  StyleSheet.create({
    popupMaincontainer: {
      height: "100%",
      width: "100%",
      position: "absolute",
      top: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#00000080",
    },
    mainContainer: {
      height: "100%",
      width: _width,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    innerContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: 200,
      width: _width - 50,
      padding: 10,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "#390d6e",
      shadowColor: "#390d6e",
      shadowOffset: { width: 4, height: 4 },
      shadowRadius: 4,
      shadowOpacity: 0.5,
      backgroundColor: "#ccacf2",
      elevation: 1,
      marginTop: 50,
    },
    buttonStyle: {
      padding: 8,
      borderWidth: 1,
      backgroundColor: "grey",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 4,
    },
    buttonText: {
      fontWeight: "600",
      fontSize: 12,
      color: "white",
    },
    textStyle: {
      fontSize: 20,
      fontWeight: "600",
      textTransform: "capitalize",
    },
  });
