import Item from "@/components/Item";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
export const dynamic = "force-dynamic";
export default async function Home() {
  const items = await client.fetch(`*[_type == 'pizza']`);
  console.log(items);
  return (
    <div className="w-[80vw] mx-auto pt-[130px] pb-[50px] flex flex-col gap-[50px]">
      <div className="flex gap-[50px] w-full justify-center flex-wrap">
        {["pizza", "salads", "burgers", "drinks"].map((item: String) => {
          return (
            <Link href={`/${item}`} className="text-[20px] capitalize">
              {item}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-[50px] justify-center">
        {items.map((item: any) => {
          return <Item key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
}