"use client";
import { collection, onSnapshot, query } from "firebase/firestore";
import Order from "./Order";
import { db } from "@/firebase";
import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState<OrderType[] | null>(null);
  useEffect(() => {
    const q = query(collection(db, "orders"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let ordersArr: OrderType[] = [];
      querySnapshot.forEach((doc) => {
        const { address, fulfilied, name, phone, order, success, time } =
          doc.data();
        ordersArr.push({
          address,
          fulfilied,
          name,
          phone,
          order,
          success,
          time,
          id: doc.id,
        });
      });
      setOrders(ordersArr);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col  items-center justify-center bg-zinc-300 min-h-screen p-[50px] gap-[50px]">
      <p className="text-slate-700 font-bold tracking-[3px]">Orders</p>
      {orders && (
        <div className="flex flex-wrap gap-[20px]">
          {orders.map((item: OrderType) => {
            return <Order key={item.id} item={item} />;
          })}
        </div>
      )}
    </div>
  );
};
export default Orders;
