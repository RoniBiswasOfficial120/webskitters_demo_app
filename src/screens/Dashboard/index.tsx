import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";
import useStyles from "./styles";
import { handleDataValidation } from "../../appConfig/utils";
import CustomTextbox from "../../components/CustomTextBox";
import Popup from "./Popup";
import { useAppDispatch } from "../../appConfig/redux";
import { setLogout } from "../../appConfig/redux/actions/userData";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { height, width } = useWindowDimensions();
  const styles = useStyles(height, width);
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 0,
  ];
  const [enablePopup, setEnablePopup] = useState(false);

  return (
    <View style={styles.superContainer}>
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => setEnablePopup(true)}>
              <Text>Add New</Text>
            </TouchableOpacity>
            <Text>name</Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(setLogout());
              }}
            >
              <Text>Log Out</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bodyContainer}>
            <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <View>
                  <Text>{item}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
      {enablePopup && (
        <Popup setEnablePopup={setEnablePopup} id="" name="" price="" />
      )}
    </View>
  );
};

export default Dashboard;

const DataRow = (id: string, name: string, price: string) => {
  const { height, width } = useWindowDimensions();
  const styles = useStyles(height, width);
  return (
    <View>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{price}</Text>
    </View>
  );
};
