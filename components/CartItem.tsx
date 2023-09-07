import { calculateSum, changeAmount, deleteProduct } from "@/redux/cartSlice";
import { useAppDispatch } from "@/redux/store";
import { urlForImage } from "@/sanity/lib/image";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const CartItem = ({ item }: CartItemPageParams) => {
  const dispatch = useAppDispatch();
  const changeAmountHandler = (amount: number, id: string, num: number) => {
    if (amount === 1 && num === -1) {
      dispatch(deleteProduct(id));
    } else {
      dispatch(changeAmount({ id, num }));
    }
    dispatch(calculateSum(undefined));
  };
  return (
    <div className="grid grid-cols-6 items-center gap-[20px] justify-items-center w-full">
      <img
        className="w-[40px] h-[40px] object-cover"
        src={urlForImage(item.product.image).url()}
      />
      <span className="col-span-2">
        {item.product.name} {item.product._type}
      </span>
      <span>$ {item.product.price}</span>
      <div className="flex gap-[10px] items-center">
        <span>{item.amount}</span>
        <div className="flex flex-col gap-[5px]">
          <BiSolidUpArrow
            onClick={() =>
              changeAmountHandler(item.amount, item.product._id, 1)
            }
            className="cursor-pointer"
          />
          <BiSolidDownArrow
            onClick={() =>
              changeAmountHandler(item.amount, item.product._id, -1)
            }
            className="cursor-pointer"
          />
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(deleteProduct(item.product._id));
          dispatch(calculateSum(undefined));
        }}
        className="text-red-700"
      >
        Delete
      </button>
    </div>
  );
};
export default CartItem;
