import firestore from "@react-native-firebase/firestore";

export const getProductList = async () => {
  let productList: any = [];
  const snapshot = await firestore().collection("product_list").get();
  productList = snapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc?.id };
  });
  return productList;
};

export const getUserList = async () => {
  let userList: any = [];
  const snapshot = await firestore().collection("user_list").get();
  userList = snapshot.docs.map((doc) => doc.data());
  console.log("userList",userList);
  
  return userList;
};
