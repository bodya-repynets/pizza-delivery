"use client";
import { toggleVisibility } from "@/redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsFillCartCheckFill } from "react-icons/bs";
const Navbar = () => {
  const { products } = useAppSelector((state) => state.cart);
  const router = useRouter();
  const dispatch = useAppDispatch();
  return (
    <header className="flex justify-around h-[80px] items-center bg-red-700 text-white fixed top-0 left-0 w-[100vw]">
      <Link href={"/"} className="text-[20px]">
        Pizza Delivery
      </Link>
      <Link href={"/cart"} className="flex gap-[5px] items-center">
        <BsFillCartCheckFill className="w-[30px] h-[30px]" />
        <span className="text-[30px]">{products.length}</span>
      </Link>
    </header>
  );
};
export default Navbar;
