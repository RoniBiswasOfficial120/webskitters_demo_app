import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";
import useStyles from "./styles";
import CustomTextbox from "../../components/CustomTextBox";
import { useNavigation } from "@react-navigation/core";
import PathConstants from "../../appConfig/route/pathConstants";
import { Nav } from "../../appConfig/TypescriptInterfaces/common_interfaces";
import { useAppDispatch } from "../../appConfig/redux";
import callSigninApi from "../../appConfig/redux/thunk/callSigninApi";

const SignIn = () => {
  const { height, width } = useWindowDimensions();
  const styles = useStyles(height, width);

  const navigation = useNavigation<Nav>();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [errorList, setErrorList] = useState({
    email: "",
    password: "",
  });

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
    dispatch(
      callSigninApi(validationData, errorList, setErrorList, {
        email: email,
        password: password,
      })
    );
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                type="password"
                passwordType={passwordVisible}
                setPasswordType={setPasswordVisible}
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
                <Text style={styles.buttonText}>
                  Don't have account? Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
