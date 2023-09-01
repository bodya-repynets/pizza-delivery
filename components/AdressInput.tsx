import { useState } from "react";

const AdressInput = ({adress, name, phone, setAdress, setName, setPhone}:any) => {


  return (
    <div className="flex flex-col gap-[20px]">
      <div className="relative">
        <input
          id={"name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type={`name`}
          placeholder=" "
          className={`border-b-2 bg-transparent h-[50px] text-red-700 w-[250px] px-[10px] py-[13px] border-red-700 placeholder:opacity-0 peer focus:outline-none focus-within:red`}
        />
        <label
          htmlFor={"name"}
          className={`text-xs absolute left-[8px] -top-[8px] peer-placeholder-shown:translate-y-[21px]
            peer-placeholder-shown:translate-x-[4px] text-slate-700 capitalize peer-placeholder-shown:text-base cursor-text`}
        >
          {'Your "Name Surname"'}
        </label>
      </div>
      <div className="relative">
        <input
          id={"phone"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type={`phone`}
          placeholder=" "
          className={`border-b-2 bg-transparent h-[50px] text-red-700 w-[250px] px-[10px] py-[13px] border-red-700 placeholder:opacity-0 peer focus:outline-none focus-within:red`}
        />
        <label
          htmlFor={"phone"}
          className={`text-xs absolute left-[8px] -top-[8px] peer-placeholder-shown:translate-y-[21px]
            peer-placeholder-shown:translate-x-[4px] text-slate-700 capitalize peer-placeholder-shown:text-base cursor-text`}
        >
          {"Phone number"}
        </label>
      </div>
      <div className="relative">
        <input
          id={"city"}
          defaultValue={"Uzhorod"}
          readOnly
          type={`City`}
          placeholder=" "
          className={`border-b-2 bg-transparent h-[50px] text-red-700 w-[250px] px-[10px] py-[13px] border-red-700 placeholder:opacity-0 peer focus:outline-none focus-within:red`}
        />
        <label
          htmlFor={"city"}
          className={`text-xs absolute left-[8px] -top-[8px] peer-placeholder-shown:translate-y-[21px]
            peer-placeholder-shown:translate-x-[4px] text-slate-700 capitalize peer-placeholder-shown:text-base`}
        >
          {"City"}
        </label>
      </div>
      <div className="relative">
        <input
          id={"adress"}
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          type={`adress`}
          placeholder=" "
          className={`border-b-2 bg-transparent h-[50px] text-red-700 w-[250px] px-[10px] py-[13px] border-red-700 placeholder:opacity-0 peer focus:outline-none focus-within:red`}
        />
        <label
          htmlFor={"adress"}
          className={`text-xs absolute left-[8px] -top-[8px] peer-placeholder-shown:translate-y-[21px]
            peer-placeholder-shown:translate-x-[4px] text-slate-700 capitalize peer-placeholder-shown:text-base cursor-text`}
        >
          {"Your adress"}
        </label>
      </div>
    </div>
  );
};
export default AdressInput;
