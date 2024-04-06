export interface interfaceObjectAsArray {
  [key: string]: any;
}

export type Nav = {
  navigate: (...args: any) => void;
};

export interface interfaceDataValidationObject {
  label: string;
  value: string;
  type: string;
  errorName: string;
}