"use client";

import { toggleVisibility } from "@/redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { AiOutlineClose } from "react-icons/ai";
import CartItem from "./CartItem";
import AdressInput from "./AdressInput";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

const Cart = () => {
  const [adress, setAdress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { products, sum, visible } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("cancel")) {
      dispatch(toggleVisibility(undefined));
    }
  }, []);
  const stripePromise = loadStripe(
    "pk_test_51NXeVeGLp2MSuitNq99TUjNBQOPLsm4q0Eb571iRp9NZKG7YLCQ8agl5wBonO0sew6WUlLEG7KoQ3v98SWLSAZsK00OiVsTE4f"
  );
  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
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
  };
  if (visible) {
    document.body.style.overflow = "hidden";
    return (
      <div
        onClick={() => dispatch(toggleVisibility(undefined))}
        className={`fixed top-0 left-0 h-[100vh] w-[100vw] bg-black bg-opacity-50 flex items-center justify-center`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex relative flex-col h-[60vh] w-[100vw] max-w-[500px] lg:w-[60vw] bg-zinc-300 items-center gap-[50px] p-[50px] rounded-xl overflow-y-scroll"
        >
          <p className="text-[20px] font-semibold">Cart:</p>
          {products.length > 0 ? (
            <div className="flex flex-col gap-[20px]">
              {products.map((item) => {
                return <CartItem item={item} key={item.product._id} />;
              })}
            </div>
          ) : (
            <p>No products have been added</p>
          )}
          <AiOutlineClose
            onClick={() => dispatch(toggleVisibility(undefined))}
            className="absolute top-[20px] right-[20px] w-[30px] h-[30px] cursor-pointer"
          />
          {products.length > 0 && (
            <AdressInput
              name={name}
              adress={adress}
              phone={phone}
              setAdress={setAdress}
              setName={setName}
              setPhone={setPhone}
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
      </div>
    );
  } else {
    document.body.style.overflow = "auto";
    return undefined;
  }
};
export default Cart;
