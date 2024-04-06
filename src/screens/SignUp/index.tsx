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
import { useDispatch } from "react-redux";
import { setCreateUser } from "../../appConfig/redux/actions/userData";

const SignIn = () => {
  const { height, width } = useWindowDimensions();
  const styles = useStyles(height, width);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorList, setErrorList] = useState({
    name: "",
    email: "",
    password: "",
  });

  const userList = useAppSelector((state) => state?.userData?.list);

  const navigation = useNavigation<Nav>();
  const dispatch = useDispatch();

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
    if (!handleDataValidation(validationData, errorList, setErrorList)) {
      if (!findDataPresent(email, userList)) {
        dispatch(
          setCreateUser({ name: name, email: email, password: password })
        );
      }
    }
  };

  return (
    <SafeAreaView>
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
            <Text style={styles.buttonText}>Don't have account? Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
