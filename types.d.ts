type ItemFromSanity = {
  image: { _type: string; asset: object[] };
  price: string;
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

type ChangeAmountPayloadType={
    
}

type OrderPageParams = {
  item: OrderType;
};
