import React from "react";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PersistGate } from "redux-persist/integration/react";
import {
  persistor,
  store,
  useAppSelector,
} from "./src/appConfig/redux";
import { StyleSheet, View } from "react-native";
import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";
import {
  PrivateRouteConstants,
  PublicRouteConstants,
} from "./src/appConfig/route/routeConstants";
import * as firebase from "@react-native-firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4nesYr8QSKnihZ8T8c2zyoePJO0TXbog",
  authDomain: "webskitter-demo-app.firebaseapp.com",
  projectId: "webskitter-demo-app",
  appId: "1:267439912763:ios:fcb4429869c50af637a91e",
};

if (!firebase?.apps?.length) {
  firebase?.initializeApp(firebaseConfig);
}

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
  const userName = useAppSelector(
    (state: any) => state.userData.activeUserName
  );
  const userEmail = useAppSelector(
    (state: any) => state.userData.activeUserEmail
  );

  return (
    <View style={styles.mainContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          {userName && userEmail
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
