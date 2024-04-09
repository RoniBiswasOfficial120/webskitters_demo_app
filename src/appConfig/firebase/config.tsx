import * as firebase from "@react-native-firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const checkFirebaseConfig = async () => {
  if (!firebase?.apps?.length) {
    await firebase?.initializeApp(firebaseConfig);
    console.log("if firebase", firebase);
  }
};
checkFirebaseConfig();
