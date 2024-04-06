import { StyleSheet } from "react-native";

const useStyles = (_height: number, _width: number) =>
  StyleSheet.create({
    mainContainer: {
      height: "100%",
      width: _width,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
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
