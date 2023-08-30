import { BsFillCartCheckFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <header className="flex justify-around h-[80px] items-center bg-red-700 text-white fixed top-0 left-0 w-[100vw]">
      <div className="text-[20px]">Pizza Delivery Logo</div>
      <button className="flex gap-[5px] items-center">
        <BsFillCartCheckFill className="w-[30px] h-[30px]" />
        <span className="text-[30px]">0</span>
      </button>
    </header>
  );
};
export default Navbar;
