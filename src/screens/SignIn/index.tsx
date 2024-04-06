import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import useStyles from "./styles";
import CustomTextbox from "../../components/CustomTextBox";
import { useNavigation } from "@react-navigation/core";
import PathConstants from "../../appConfig/route/pathConstants";
import { Nav } from "../../appConfig/TypescriptInterfaces/common_interfaces";
import { findDataPresent, handleDataValidation } from "../../appConfig/utils";
import { useAppSelector } from "../../appConfig/redux";
import Toast from "react-native-toast-message";

const SignIn = () => {
  const { height, width } = useWindowDimensions();
  const styles = useStyles(height, width);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorList, setErrorList] = useState({
    email: "",
    password: "",
  });
  const navigation = useNavigation<Nav>();
  const userList = useAppSelector((state) => state?.userData.list);

  console.log("userList", userList);

  const handleSignIn = () => {
    const validationData = [
      {
        label: "Email Id",
        value: email,
        type: "emailId",
        errorName: "email",
      },
      {
        label: "Password",
        value: password,
        type: "password",
        errorName: "password",
      },
    ];
    if (!handleDataValidation(validationData, errorList, setErrorList)) {
      if (findDataPresent(email, userList)) {
        console.log("data present");
      }
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
          <CustomTextbox
            label="Email Id"
            placeholder="enter email id . . ."
            value={email}
            setValue={setEmail}
            errorList={errorList}
            setErrorList={setErrorList}
            errorName={"email"}
          />
          <CustomTextbox
            label="Password"
            placeholder="enter password . . ."
            value={password}
            setValue={setPassword}
            errorList={errorList}
            setErrorList={setErrorList}
            errorName={"password"}
          />
          <TouchableOpacity
            onPress={() => handleSignIn()}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(PathConstants.signUp)}
          >
            <Text style={styles.buttonText}>Don't have account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
