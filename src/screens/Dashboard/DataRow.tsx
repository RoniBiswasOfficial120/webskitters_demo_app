import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import styleConstants from "../../constants/styleConstants";

const DataRow = ({
  name,
  price,
  discount,
  description,
  setEnableEditPopup,
  setEnableDeletePopup,
}: {
  name: string;
  price: string;
  discount: string;
  description: string;
  setEnableEditPopup: Function;
  setEnableDeletePopup: Function;
}) => {
  const { height, width } = useWindowDimensions();
  const styles = useStyles(height, width);
  return (
    <View style={styles.mainRowContainer}>
      <View style={styles.leftContainer}>
        <View style={styles.leftUpperContainer}>
          <Text style={styles.boldTextStyle}>{name}</Text>
          <Text style={styles.boldTextStyle}>{discount + "%  " + price}</Text>
        </View>
        <View style={styles.leftBottomContainer}>
          <Text style={styles.textStyle} numberOfLines={2}>
            {description}
          </Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity
          onPress={() => {
            setEnableEditPopup();
          }}
        >
          <Text style={styles.boldTextStyle}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setEnableDeletePopup();
          }}
        >
          <Text style={styles.boldTextStyle}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DataRow;

const useStyles = (_height: number, _width: number) =>
  StyleSheet.create({
    mainRowContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      width: "100%",
      padding: 8,
      marginTop: 8,
      backgroundColor: styleConstants.color.background_default,
    },
    leftContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      width: _width - 48 - 80,
    },
    leftUpperContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
    leftBottomContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "100%",
    },
    rightContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: 80,
    },
    boldTextStyle: {
      fontSize: 12,
      fontWeight: "600",
      textTransform: "capitalize",
    },
    textStyle: {
      fontSize: 12,
      fontWeight: "400",
      textTransform: "capitalize",
    },
  });
