import Link from "next/link";
import { BsArrowReturnLeft } from "react-icons/bs";
const SanityNavbar = (props: any) => {
  return (
    <div>
      <Link href={"/"} className="flex gap-[10px] items-center p-[10px]">
        <BsArrowReturnLeft className="w-[20px] h-[20px]" />
        <span className="font-semibold">Go to website</span>
      </Link>
      <>{props.renderDefault(props)}</>
    </div>
  );
};
export default SanityNavbar;
