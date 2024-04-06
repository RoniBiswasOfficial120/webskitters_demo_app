import React from "react";
import { KeyboardType, StyleSheet, Text, TextInput, View } from "react-native";
import { interfaceObjectAsArray } from "../appConfig/TypescriptInterfaces/common_interfaces";
import CustomIconButton from "./CustomIcon";
import svgIconConstant from "../constants/svgiconConstants";
import styleConstants from "../constants/styleConstants";

interface compParam {
  label: string;
  value: string;
  setValue: Function;
  placeholder: string;
  type?: string;
  passwordType?: boolean;
  setPasswordType?: Function;
  errorList: interfaceObjectAsArray;
  setErrorList: Function;
  errorName: string;
  iconVisible?: boolean;
  iconParam?: {
    labelIcon?: string;
    onPress?: Function;
  };
}

const CustomTextbox = ({
  label,
  value,
  setValue,
  placeholder = "",
  type = "text",
  passwordType = false,
  setPasswordType = () => {},
  errorList,
  setErrorList,
  errorName,
}: compParam) => {
  const styles = useStyles(errorList[errorName]?.length);

  const handleError = () => {
    let newErrorList = { ...errorList };
    newErrorList[errorName] = "";
    setErrorList(newErrorList);
  };
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <View style={styles.mainContainer}>
        <TextInput
          secureTextEntry={passwordType}
          value={value}
          onChangeText={(e) => {
            handleError();
            setValue(e);
          }}
          placeholder={placeholder}
          style={styles.textboxStyle}
          autoCapitalize={"none"}
          multiline={false}
          autoCorrect={false}
        />
        {value?.trim() && (
          <View style={styles.rightIconContainer}>
            {type === "text" ? (
              <CustomIconButton
                labelIcon={svgIconConstant.cross}
                onPress={() => setValue("")}
              />
            ) : (
              <CustomIconButton
                labelIcon={
                  passwordType
                    ? svgIconConstant.invisible
                    : svgIconConstant.visible
                }
                onPress={() => setPasswordType(!passwordType)}
              />
            )}
          </View>
        )}
      </View>
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{errorList[errorName]}</Text>
      </View>
    </View>
  );
};

export default CustomTextbox;

const useStyles = (isError: boolean) =>
  StyleSheet.create({
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingTop: styleConstants.gap.s,
    },
    mainContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderWidth: 1,
      borderRadius: 4,
      borderColor: isError
        ? styleConstants.color.border_red
        : styleConstants.color.border_default,
      backgroundColor: styleConstants.color.background_white,
      height: 36,
      position: "relative",
      width: "100%",
    },
    rightIconContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      right: 0,
      zIndex: 2,
    },
    textboxStyle: {
      flex: 1,
      height: "100%",
      fontSize: 11,
      paddingRight: styleConstants.gap.xxl,
      paddingLeft: 10,
    },
    errorContainer: {
      minHeight: 24,
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "100%",
    },
    errorText: {
      width: "100%",
      fontSize: 11,
      color: styleConstants.color.border_red,
    },
    labelContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    labelText: {
      width: "100%",
      fontWeight:"600",
      fontSize: 12,
    },
  });
