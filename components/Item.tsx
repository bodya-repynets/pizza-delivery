"use client";
import { addProduct, calculateSum, deleteProduct } from "@/redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { urlForImage } from "@/sanity/lib/image";
import { BsFillCartDashFill, BsFillCartPlusFill } from "react-icons/bs";

const Item = ({ item }: any) => {
  const { products } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col bg-neutral-300 w-[300px] rounded-xl shadow-xl overflow-hidden pt-[20px] items-center gap-[20px] justify-between">
      <img
        className="w-[200px] h-[200px] object-cover"
        src={urlForImage(item.image).url()}
        alt="pizza"
      />
      <p className="text-[18px] tracking-[2px] uppercase px-[10px] text-center">
        {item.name}
      </p>
      <div className="flex flex-col gap-[10px] items-center">
        {item.ingredients && (
          <p className="text-[12px] tracking-[2px] uppercase">Ingredients:</p>
        )}
        <div className="flex flex-wrap px-[10px] justify-center">
          {item.ingredients &&
            item.ingredients.map((value: string) => {
              return (
                <p
                  key={value}
                  className="flex justify-center items-center h-[30px] text-[12px] tracking-[2px] uppercase px-[3px]"
                >
                  {value},
                </p>
              );
            })}
        </div>
      </div>
      <div className="flex justify-between w-full items-center">
        <p className="w-[150px] h-[50px] text-[28px] tracking-[3px] flex justify-center items-center">
          {"$ "}
          {item.price}
        </p>
        {products.findIndex((current) => current.product._id === item._id) !==
        -1 ? (
          <button
            onClick={() => {
              dispatch(deleteProduct(item._id));
              dispatch(calculateSum(undefined));
            }}
            className="w-[150px] h-[50px] bg-slate-700 rounded-tl-xl text-white uppercase tracking-[2px] flex justify-center items-center"
          >
            <BsFillCartDashFill className="w-[24px] h-[24px]" />
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(addProduct(item));
              dispatch(calculateSum(undefined));
            }}
            className="w-[150px] h-[50px] bg-red-700 rounded-tl-xl text-white uppercase tracking-[2px] flex justify-center items-center"
          >
            <BsFillCartPlusFill className="w-[24px] h-[24px]" />
          </button>
        )}
      </div>
    </div>
  );
};
export default Item;
