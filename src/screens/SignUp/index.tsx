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
import callSignupApi from "../../appConfig/redux/thunk/callSignupApi";
import { useAppDispatch } from "../../appConfig/redux";

const SignIn = () => {
  const { height, width } = useWindowDimensions();
  const styles = useStyles(height, width);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [errorList, setErrorList] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigation = useNavigation<Nav>();
  const dispatch = useAppDispatch();

  const handleSignIn = () => {
    const validationData = [
      {
        label: "Name",
        value: name,
        type: "text",
        errorName: "name",
      },
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
      callSignupApi(validationData, errorList, setErrorList, {
        email: email,
        password: password,
        name: name,
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
                label="Name"
                placeholder="enter your name . . ."
                value={name}
                setValue={setName}
                errorList={errorList}
                setErrorList={setErrorList}
                errorName={"name"}
              />
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
                type="password"
                passwordType={passwordVisible}
                setPasswordType={setPasswordVisible}
                setErrorList={setErrorList}
                errorName={"password"}
              />
              <TouchableOpacity
                onPress={() => handleSignIn()}
                style={styles.buttonStyle}
              >
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate(PathConstants.signIn)}
              >
                <Text style={styles.buttonText}>
                  Don't have account? Sign In
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
