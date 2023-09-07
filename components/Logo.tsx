const Logo = () => {
  return (
    <div className="flex gap-[10px] items-center px-[20px]">
      <img
        className="w-[40px] h-[100%] object-contain rounded-full"
        src="/logo.jpg"
        alt="logo"
      />
      <span className="font-bold">Pizza delivery</span>
    </div>
  );
};
export default Logo;
