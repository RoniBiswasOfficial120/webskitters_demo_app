import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import useStyles from "./styles";
import { filterProductList } from "../../appConfig/utils";
import { useAppDispatch, useAppSelector } from "../../appConfig/redux";
import { setLogout } from "../../appConfig/redux/actions/userData";
import firestore from "@react-native-firebase/firestore";
import AddProductPopup from "../../components/AddProductPopup";
import EditProductPopup from "../../components/EditProductPopup";
import DataRow from "./DataRow";
import DeleteProductPopup from "../../components/DeleteProductPopup";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { height, width } = useWindowDimensions();
  const styles = useStyles(height, width);
  const [enableAddPopup, setEnableAddPopup] = useState(false);
  const [enableEditPopup, setEnableEditPopup] = useState(false);
  const [editPopupData, setEditPopupData] = useState({
    docId: "",
    email: "",
    name: "",
    desc: "",
    disc: "",
    price: "",
  });
  const [enableDeletePopup, setEnableDeletePopup] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState("");

  const [productList, setProductList] = useState([]);

  const userEmail = useAppSelector((state) => state?.userData?.activeUserEmail);
  const userName = useAppSelector((state) => state?.userData?.activeUserName);

  useEffect(() => {
    const getProductList = async () => {
      let allProductList: any = [];
      const snapshot = await firestore().collection("product_list").get();
      allProductList = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc?.id };
      });
      setProductList(filterProductList(userEmail, allProductList));
    };

    getProductList();
  }, [enableAddPopup, enableEditPopup, enableDeletePopup]);

  return (
    <View style={styles.superContainer}>
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => setEnableAddPopup(true)}>
              <Text style={styles.textStyle}>Add New</Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}>{userName}</Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(setLogout());
              }}
            >
              <Text style={styles.textStyle}>Log Out</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bodyContainer}>
            <FlatList
              data={productList}
              renderItem={({ item, index }: { item: any; index: number }) => (
                <DataRow
                  name={item?.name}
                  price={item?.price}
                  discount={item?.discount}
                  description={item?.desc}
                  setEnableEditPopup={() => {
                    setEnableEditPopup(true);
                    setSelectedDocId(item?.id);
                    setEditPopupData({
                      docId: item?.id,
                      email: item?.email,
                      name: item?.name,
                      desc: item?.desc,
                      disc: item?.discount,
                      price: item?.price,
                    });
                  }}
                  setEnableDeletePopup={() => {
                    setSelectedDocId(item?.id);
                    setEnableDeletePopup(true);
                  }}
                />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
      {enableAddPopup && (
        <AddProductPopup email={userEmail} setEnablePopup={setEnableAddPopup} />
      )}
      {enableEditPopup && (
        <EditProductPopup
          setEnablePopup={setEnableEditPopup}
          {...editPopupData}
        />
      )}
      {enableDeletePopup && (
        <DeleteProductPopup
          docId={selectedDocId}
          setEnablePopup={() => setEnableDeletePopup(false)}
        />
      )}
    </View>
  );
};

export default Dashboard;
