"use client";
import { db } from "@/firebase";
import { setModal, closeModal, confirm } from "@/redux/modalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Modal = () => {
  const { message, visible } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      successOrder();
      dispatch(setModal("Thank you for order, wait for our call."));
      document.body.style.overflow = "hidden";
    }
  }, []);
  const okay = () => {
    dispatch(confirm());
    dispatch(closeModal());
    document.body.style.overflow = "auto";
    router.push("/");
  };
  const close = () => {
    dispatch(closeModal());
    document.body.style.overflow = "auto";
    router.push("/");
  };
  const successOrder = async () => {
    const query = new URLSearchParams(window.location.search);
    const id = query.get("id");
    if (id)
      try {
        await updateDoc(doc(db, "orders", id), {
          success: true,
        });
      } catch (e) {
        console.error("Error updating document: ", e);
      }
  };
  return (
    <div
      onClick={close}
      className={`fixed ${
        visible ? "flex" : "hidden"
      } top-0 left-0 h-[100vh] w-[100vw] bg-black bg-opacity-50 flex items-center justify-center`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col h-[200px] w-[300px] bg-zinc-300 items-center p-[20px] rounded-xl justify-center relative text-center gap-[40px]"
      >
        {message}
        <button onClick={okay}>Ok</button>
      </div>
    </div>
  );
};
export default Modal;
