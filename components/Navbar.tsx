"use client";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import { BsFillCartCheckFill } from "react-icons/bs";
const Navbar = () => {
  const { products } = useAppSelector((state) => state.cart);
  return (
    <header className="flex justify-around h-[80px] items-center bg-gradient-to-r  from-red-700 via-red-800 to-red-700 text-white fixed top-0 left-0 w-[100vw]">
      <Link
        href={"/"}
        className="text-[20px] font-semibold hover:scale-110 duration-100"
      >
        Pizza Delivery
      </Link>
      <Link
        href={"/cart"}
        className="flex gap-[5px] items-center hover:scale-110 duration-100"
      >
        <BsFillCartCheckFill className="w-[30px] h-[30px]" />
        <span className="text-[20px]">{products.length}</span>
      </Link>
    </header>
  );
};
export default Navbar;
