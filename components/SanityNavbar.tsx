import Link from "next/link";
const SanityNavbar = (props: any) => {
  return (
    <div>
      <>{props.renderDefault(props)}</>
      <div className="flex items-center justify-around py-[20px] border-b-[1px] border-slate-300">
        <Link href={"/"} className="flex gap-[10px] items-center">
          <span className="font-bold tracking-[3px] text-slate-700">
            Go to website
          </span>
        </Link>
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="font-bold tracking-[3px] text-slate-700"
        >
          Orders
        </button>
      </div>
    </div>
  );
};
export default SanityNavbar;
