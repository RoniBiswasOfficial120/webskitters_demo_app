/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PersistGate } from "redux-persist/integration/react";
import {
  persistor,
  store,
  useAppDispatch,
  useAppSelector,
} from "./src/appConfig/redux";
import { StyleSheet, View } from "react-native";
import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";
import {
  PrivateRouteConstants,
  PublicRouteConstants,
} from "./src/appConfig/route/routeConstants";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppConfig />
        </PersistGate>
      </Provider>
    </>
  );
};

const AppConfig = () => {
  const Stack = createNativeStackNavigator();
  const state = useAppSelector((state) => state.userData);
  const authStatus = useAppSelector((state: any) => state.userData.auth);
  useEffect(() => {});

  return (
    <View style={styles.mainContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          {authStatus
            ? PrivateRouteConstants.map((route, index) => {
                return (
                  <Stack.Screen
                    name={route.path}
                    component={route.component}
                    options={{ headerShown: false, animation: "none" }}
                    key={index}
                  />
                );
              })
            : PublicRouteConstants.map((route, index) => {
                return (
                  <Stack.Screen
                    name={route.path}
                    component={route.component}
                    options={{ headerShown: false, animation: "none" }}
                    key={index}
                  />
                );
              })}
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    position: "relative",
  },
});

export default App;
