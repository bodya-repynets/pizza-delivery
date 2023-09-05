"use client";

import { NextStudio } from "next-sanity/studio";

import config from "../../../../sanity.config";
import { useEffect, useState } from "react";
import { db } from "@/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import Order from "@/components/Order";

export function Studio() {
  const [orders, setOrders] = useState<any>(null);
  useEffect(() => {
    const q = query(collection(db, "orders"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let ordersArr: any = [];
      querySnapshot.forEach((doc) => {
        ordersArr.push({ ...doc.data(), id: doc.id });
      });
      setOrders(ordersArr);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <NextStudio config={config} />
      <div className="flex flex-col  items-center justify-center p-[50px] gap-[50px]">
        <p className="text-slate-700 font-bold tracking-[3px]">Orders</p>
        {orders && (
          <div className="flex flex-wrap gap-[20px]">
            {orders.map((item: any) => {
              return <Order key={item.id} item={item} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
