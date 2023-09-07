type ItemFromSanity = {
  image: { _type: string; asset: { _ref: string; _type: string } };
  price: number;
  _rev: string;
  name: string;
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _type: string;
  ingredients: string[];
};

type Params = {
  params: { category: string };
  searchParams: object;
};

type OrderType = {
  address: string;
  fulfilied: boolean;
  id: string;
  name: string;
  order: OrderItem[];
  phone: string;
  success: boolean;
  time: {
    nanoseconds: number;
    seconds: number;
  };
};

type ProductType = {
  amount: number;
  product: ItemFromSanity;
};

type ChangeAmountPayloadType = {};

type OrderPageParams = {
  item: OrderType;
};
type CartItemPageParams = {
  item: ProductType;
};
type ItemPageParams = {
  item: ItemFromSanity;
};
type InputsPageType = {
  address: string;
  name: string;
  phone: string;
  setAddress: (newValue: string) => void;
  setName: (newValue: string) => void;
  setPhone: (newValue: string) => void;
  error: boolean;
};

type ConfirmPageParams = {
  visible: boolean;
  id: string;
  setVisible: (newValue: boolean) => void;
};
