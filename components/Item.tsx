"use client";
import { urlForImage } from "@/sanity/lib/image";
import { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

const Item = ({ item }: any) => {
  const [size, setSize] = useState("30cm");
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
      {item.price30cm && (
        <div className="flex justify-center gap-[30px]">
          <button
            onClick={() => setSize("30cm")}
            className={`${
              size === "30cm" && "bg-red-700 text-white"
            } px-[10px] rounded`}
          >
            30 cm
          </button>
          <button
            onClick={() => setSize("40cm")}
            className={`${
              size === "40cm" && "bg-red-700 text-white"
            } px-[10px] rounded`}
          >
            40 cm
          </button>
        </div>
      )}
      <div className="flex justify-between w-full items-center">
        <p className="w-[150px] h-[50px] text-[28px] tracking-[3px] flex justify-center items-center">
          {"$ "}
          {item.price30cm
            ? size === "30cm"
              ? item.price30cm
              : item.price40cm
            : item.price}
        </p>
        <button className="w-[150px] h-[50px] bg-red-700 rounded-tl-xl text-white uppercase tracking-[2px] flex justify-center items-center">
          <BsFillCartPlusFill className="w-[24px] h-[24px]" />
        </button>
      </div>
    </div>
  );
};
export default Item;
