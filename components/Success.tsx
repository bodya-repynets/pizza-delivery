"use client";
import { useRouter } from "next/navigation";
import { useEffect, useReducer, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Success = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const close = () => {
    setShow(false);
    document.body.style.overflow = "auto";
    router.push("/");
  };
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setShow(true);
      document.body.style.overflow = "hidden";
    }
  }, []);
  return (
    <div
      onClick={close}
      className={`fixed ${
        show ? "flex" : "hidden"
      } top-0 left-0 h-[100vh] w-[100vw] bg-black bg-opacity-50 flex items-center justify-center`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col h-[300px] w-[300px] bg-zinc-300 items-center p-[20px] rounded-xl justify-center relative"
      >
        Your order was successfully accepted, wait for our call please.
        <AiOutlineClose
          onClick={close}
          className="absolute top-[20px] right-[20px] w-[30px] h-[30px] cursor-pointer"
        />
      </div>
    </div>
  );
};
export default Success;
