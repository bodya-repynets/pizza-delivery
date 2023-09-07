import Link from "next/link";
const SanityNavbar = (props: any) => {
  return (
    <div>
      <>{props.renderDefault(props)}</>
      <div className="flex items-center justify-around py-[20px] border-b-[1px] border-slate-300">
        <Link
          href={"/"}
          className="flex gap-[10px] items-center font-bold tracking-[3px] text-slate-700 hover:scale-110 duration-100"
        >
          Go to website
        </Link>
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="font-bold tracking-[3px] text-slate-700 hover:scale-110 duration-100"
        >
          Orders
        </button>
      </div>
    </div>
  );
};
export default SanityNavbar;
