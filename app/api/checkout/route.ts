import { urlForImage } from "@/sanity/lib/image";
import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req: any, res: any) {
  const products = await req.json();
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: products.map((item: any) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.product.name + " " + item.product._type,
              images: [urlForImage(item.product.image).url()],
            },
            unit_amount: item.product.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.amount,
        };
      }),
      mode: "payment",
      success_url: `http://localhost:3000/?success=true`,
      cancel_url: `http://localhost:3000/?cancel=true`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
