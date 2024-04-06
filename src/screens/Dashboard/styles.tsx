import { StyleSheet } from "react-native";
import styleConstants from "../../constants/styleConstants";

const useStyles = (_height: number, _width: number) =>
  StyleSheet.create({
    superContainer: {
      height: "100%",
      width: "100%",
      position: "relative",
    },
    popupMaincontainer: {
      height: "100%",
      width: "100%",
      position: "absolute",
      top: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"#00000080"
    },
    mainContainer: {
      height: "100%",
      width: _width,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    headerContainer: {
      height: 50,
      width: "100%",
      paddingHorizontal: 10,
      backgroundColor: styleConstants.color.background_default,
      flexDirection: "row",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    bodyContainer: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "blue",
      paddingHorizontal: 10,
      width: "100%",
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
  });

export default useStyles;
