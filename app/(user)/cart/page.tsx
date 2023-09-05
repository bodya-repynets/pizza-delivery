"use client";

import { toggleVisibility } from "@/redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { AiOutlineClose } from "react-icons/ai";

import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import CartItem from "@/components/CartItem";
import AdressInput from "@/components/AdressInput";
export const dynamic = "force-dynamic";

const Cart = () => {
  const router = useRouter();
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const { products, sum } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const deleteObj = async (id: string) => {
    await deleteDoc(doc(db, "orders", id));
  };
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("cancel")) {
      const id = query.get("id");
      if (id) deleteObj(id);
      router.push("/");
    }
  }, []);
  const stripePromise = loadStripe(
    "pk_test_51NXeVeGLp2MSuitNq99TUjNBQOPLsm4q0Eb571iRp9NZKG7YLCQ8agl5wBonO0sew6WUlLEG7KoQ3v98SWLSAZsK00OiVsTE4f"
  );
  const addOrder = async () => {
    const id = uuidv4();
    try {
      await setDoc(doc(db, "orders", id), {
        name,
        id,
        address,
        phone,
        success: false,
        order: products,
        fulfilied: false,
        time: new Date(),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    return id;
  };
  const handleCheckout = async () => {
    if (name && address && phone) {
      const id = await addOrder();
      console.log(id);
      try {
        const stripe = await stripePromise;
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ products, id }),
        });

        const data = await response.json();
        if (!data.error) {
          if (stripe)
            await stripe.redirectToCheckout({
              sessionId: data.sessionId,
            });
        } else {
          console.log(data.error);
        }
      } catch (err) {
        console.error("Error in creating checkout session:", err);
      }
    } else {
      setError(true);
    }
  };
  return (
    <div className="flex flex-col bg-zinc-300 items-center justify-center gap-[50px] p-[80px] min-h-screen">
      <p className="text-[20px] font-semibold">Cart:</p>
      {products.length > 0 ? (
        <div className="flex flex-col gap-[20px] min-w-[300px]">
          {products.map((item) => {
            return <CartItem item={item} key={item.product._id} />;
          })}
        </div>
      ) : (
        <p>No products have been added</p>
      )}
      {products.length > 0 && (
        <AdressInput
          name={name}
          adress={address}
          phone={phone}
          setAddress={setAddress}
          setName={setName}
          setPhone={setPhone}
          error={error}
        />
      )}{" "}
      {products.length > 0 && (
        <div className="text-[20px] font-semibold">Total: $ {sum}</div>
      )}
      {products.length > 0 && (
        <button
          onClick={handleCheckout}
          className="w-[200px] min-h-[50px] bg-red-700 rounded text-white"
        >
          Order
        </button>
      )}
    </div>
  );
};
export default Cart;
