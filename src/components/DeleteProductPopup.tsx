import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import firestore from "@react-native-firebase/firestore";
import Toast from "react-native-toast-message";
import { useAppDispatch } from "../appConfig/redux";
import callDeleteProductApi from "../appConfig/redux/thunk/callDeleteProductApi";

interface compParam {
  docId: string;
  setEnablePopup: Function;
}

const DeleteProductPopup = ({ docId, setEnablePopup }: compParam) => {
  const { height, width } = useWindowDimensions();
  const styles = useStyles(height, width);
  const dispatch = useAppDispatch();
  const handleDeleteProduct = () => {
    dispatch(callDeleteProductApi(docId, setEnablePopup));
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
                <Text style={styles.textStyle}>Delete product</Text>
                <Text style={styles.smallTextStyle}>
                  Are you sure want to delete the product?
                </Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => handleDeleteProduct()}
                    style={styles.deleteButtonStyle}
                  >
                    <Text style={styles.buttonText}>Delete</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setEnablePopup(false)}
                    style={styles.buttonStyle}
                  >
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
};

export default DeleteProductPopup;

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
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "50%",
    },
    deleteButtonStyle: {
      padding: 8,
      borderWidth: 1,
      backgroundColor: "red",
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
    smallTextStyle: {
      fontSize: 14,
      fontWeight: "600",
      textTransform: "capitalize",
      marginTop: 28,
      marginBottom: 60,
    },
  });
