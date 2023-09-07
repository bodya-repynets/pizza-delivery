import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";
import moment from "moment";
import { ChangeEvent, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Confirm from "./Confirm";

const Order = ({ item }: OrderPageParams) => {
  const [visible, setVisible] = useState<boolean>(false);
  const fulfil = async (e: ChangeEvent<HTMLInputElement>, id: string) => {
    if (id)
      try {
        await updateDoc(doc(db, "orders", id), {
          fulfilied: e.target.checked,
        });
      } catch (e) {
        console.error("Error updating document: ", e);
      }
  };
  const deleteItem = () => {
    document.body.style.overflow = "hidden";
    setVisible(true);
  };
  if (item.success) {
    return (
      <div
        className={`flex flex-col items-center gap-[10px] bg-white p-[20px] w-[320px] rounded-xl justify-between`}
      >
        <div className="flex justify-between w-full">
          <span className="text-[10px] text-slate-700 tracking-[2px]">
            {moment(new Date(item.time.seconds * 1000)).format("HH:mm")}
          </span>
          <span className="text-[10px] text-slate-700 tracking-[2px]">
            {moment(new Date(item.time.seconds * 1000)).format("DD.MM.YYYY")}
          </span>
        </div>
        <p className="text-[12px] text-slate-700 tracking-[2px]">
          Name: {item.name}
        </p>
        <p className="text-[12px] text-slate-700 tracking-[2px]">
          Phone: {item.phone}
        </p>
        <p className="text-[12px] text-slate-700 tracking-[2px]">
          Address: {item.address}
        </p>
        <div className="flex flex-col gap-[10px] items-center">
          <p className="text-[12px] text-slate-700 tracking-[2px]">Items:</p>
          <table className="border-[1px] w-full">
            <tr>
              <th className="text-[12px] border-[1px] text-center p-[10px] text-slate-700 font-semibold">
                Name
              </th>
              <th className="text-[12px] border-[1px] text-center p-[10px] text-slate-700 font-semibold">
                Category
              </th>
              <th className="text-[12px] border-[1px] text-center p-[10px] text-slate-700 font-semibold">
                Amount
              </th>
            </tr>
            {item.order.map((order: ProductType, index: number) => {
              return (
                <tr key={order.product.name}>
                  <td className="text-[12px] text-center p-[10px] border-[1px] text-slate-700 tracking-[2px]">
                    {order.product.name}
                  </td>
                  <td className="text-[12px] text-center p-[10px] border-[1px] text-slate-700 tracking-[2px]">
                    {order.product._type}
                  </td>
                  <td className="text-[12px] text-center p-[10px] border-[1px] text-slate-700 tracking-[2px]">
                    {order.amount}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="flex gap-[30px] mt-[10px] items-center">
          <input
            type="checkbox"
            checked={item.fulfilied}
            onChange={(e) => fulfil(e, item.id)}
            className="w-[25px] h-[25px]"
          />
          <AiOutlineDelete
            onClick={() => deleteItem()}
            className="w-[30px] h-[30px] cursor-pointer"
          />
        </div>
        <Confirm id={item.id} visible={visible} setVisible={setVisible} />
      </div>
    );
  } else {
    return undefined;
  }
};
export default Order;
