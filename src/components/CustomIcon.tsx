import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SvgXml } from "react-native-svg";
import styleConstants from "../constants/styleConstants";
import svgIconConstant from "../constants/svgiconConstants";

type componentProps = {
  labelIcon?: string;
  onPress?: Function;
};

const CustomIconButton = ({
  labelIcon = "",
  onPress = () => {},
}: componentProps) => {
  const styles = useStyle();

  return (
    <TouchableOpacity style={styles.iconContainer} onPress={() => onPress()}>
      <SvgXml
        xml={labelIcon || svgIconConstant.default}
        width={12}
        height={12}
      />
    </TouchableOpacity>
  );
};

const useStyle = () =>
  StyleSheet.create({
    iconContainer: {
      margin: 4,
      height: 24,
      width: 24,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      backgroundColor: styleConstants.color.background_white,
    },
  });

export default CustomIconButton;
