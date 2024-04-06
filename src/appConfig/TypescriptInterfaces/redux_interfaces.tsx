export interface interfaceReduxAction {
  type: string;
  payload: any;
}

export interface interfaceUserData {
  auth: boolean;
  list: interfaceUserList[];
}

export interface interfaceUserList {
  name: string;
  email: string;
  password: string;
  productList?: interfaceProductDetails[];
}

export interface interfaceProductDetails {
  id: string;
  name: string;
  desc: string;
  price: number;
  discountPercentage: number;
}
