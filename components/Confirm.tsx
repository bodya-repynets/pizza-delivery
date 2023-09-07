"use client";
import { db } from "@/firebase";
import { deleteDoc, doc } from "firebase/firestore";

const Confirm = ({ visible, setVisible, id }: ConfirmPageParams) => {
  const okay = async () => {
    document.body.style.overflow = "auto";
    if (id) await deleteDoc(doc(db, "orders", id));
    setVisible(false);
  };
  const close = () => {
    setVisible(false);
    document.body.style.overflow = "auto";
  };
  return (
    <div
      onClick={close}
      className={`fixed ${
        visible ? "flex" : "hidden"
      } top-0 left-0 h-[100vh] w-[100vw] bg-black bg-opacity-80 z-10 flex items-center justify-center`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col h-[200px] w-[300px] bg-zinc-300 items-center p-[20px] rounded-xl justify-center relative text-center gap-[40px]"
      >
        <p>Click OK to delete</p>
        <div className="flex gap-[20px]">
          <button
            className="w-[80px] h-[40px] bg-red-700 hover:bg-red-800 text-white rounded"
            onClick={okay}
          >
            OK
          </button>
          <button
            className="w-[80px] h-[40px] bg-slate-700 hover:bg-slate-800 text-white rounded"
            onClick={close}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default Confirm;
