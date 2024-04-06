import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTextbox from "../../components/CustomTextBox";
import { handleDataValidation } from "../../appConfig/utils";
import useStyles from "./styles";
import { useState } from "react";

interface compParam {
  setEnablePopup: Function;
  id: string;
  name: string;
  price: string;
}

const Popup = ({ setEnablePopup, id, name, price }: compParam) => {
  const { height, width } = useWindowDimensions();
  const styles = useStyles(height, width);
  const [productName, setProductName] = useState(name);
  const [productId, setProductId] = useState(id);
  const [productPrice, setProductPrice] = useState(price);
  const [errorList, setErrorList] = useState({
    productName: "",
    productId: "",
    productPrice: "",
  });

  const handleSignIn = () => {
    const validationData = [
      {
        label: "Product Name",
        value: productName,
        type: "text",
        errorName: "productName",
      },
      {
        label: "Product Id",
        value: productId,
        type: "text",
        errorName: "productId",
      },
      {
        label: "Price",
        value: productPrice,
        type: "text",
        errorName: "productPrice",
      },
    ];
    if (!handleDataValidation(validationData, errorList, setErrorList)) {
    }
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
                <CustomTextbox
                  label="Product Name"
                  placeholder="Enter Product Name . . ."
                  value={productId}
                  setValue={setProductId}
                  errorList={errorList}
                  setErrorList={setErrorList}
                  errorName={"email"}
                />
                <CustomTextbox
                  label="Product Id"
                  placeholder="Enter Product Id . . ."
                  value={productName}
                  setValue={setProductName}
                  errorList={errorList}
                  setErrorList={setErrorList}
                  errorName={"password"}
                />
                <CustomTextbox
                  label="Price"
                  placeholder="Enter Price . . ."
                  value={productPrice}
                  setValue={setProductPrice}
                  errorList={errorList}
                  setErrorList={setErrorList}
                  errorName={"password"}
                />
                <TouchableOpacity
                  onPress={() => handleSignIn()}
                  style={styles.buttonStyle}
                >
                  <Text style={styles.buttonText}>Done</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
};

export default Popup;
