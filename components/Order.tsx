import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";
import moment from "moment";
import { ChangeEvent } from "react";

const Order = ({ item }: any) => {
  const fulfil = async (e: ChangeEvent<HTMLInputElement>, id: any) => {
    if (id)
      try {
        await updateDoc(doc(db, "orders", id), {
          fulfilied: e.target.checked,
        });
      } catch (e) {
        console.error("Error updating document: ", e);
      }
  };
  if (item.success) {
    return (
      <div
        className={`flex flex-col items-center gap-[10px] bg-white p-[20px] rounded-xl justify-between`}
      >
        <div className="flex justify-between w-full">
          <span className="text-[10px] text-slate-700">
            {moment(new Date(item.time.seconds * 1000)).format("HH:mm")}
          </span>
          <span className="text-[10px] text-slate-700">
            {moment(new Date(item.time.seconds * 1000)).format("DD.MM.YYYY")}
          </span>
        </div>
        <p className="text-[12px] text-slate-700">Name: {item.name}</p>
        <p className="text-[12px] text-slate-700">Phone: {item.phone}</p>
        <p className="text-[12px] text-slate-700">Address: {item.address}</p>
        <div className="flex flex-col gap-[10px] items-center">
          <p className="text-[12px] text-slate-700">Items:</p>
          {item.order.map((order: any, index: number) => {
            return (
              <p className="text-[12px] text-slate-700" key={order.product._id}>
                {index + 1} :{" "}
                {order.product.name + " (" + order.product._type + ")"}, amount{" "}
                {order.amount}
              </p>
            );
          })}
        </div>
        <input
          type="checkbox"
          checked={item.fulfilied}
          onChange={(e) => fulfil(e, item.id)}
          className="w-[30px] h-[30px] mt-[20px]"
        />
      </div>
    );
  } else {
    return undefined;
  }
};
export default Order;
