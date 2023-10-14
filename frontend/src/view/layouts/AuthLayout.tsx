import React from "react";
import illustration from "../../assets/illustration.png";
import logoGreen from "../../assets/fincheck-logo-green.svg";
import logoGray from "../../assets/fincheck-logo-gray.svg";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="flex h-full p-8">
      <div className="w-full h-full flex flex-col gap-16 justify-center items-center lg:w-1/2">
        <img src={logoGray} className="h-6" />

        <div className="w-full max-w-[504px] px-8">
          <Outlet />
        </div>
      </div>
      <div className="w-1/2 h-full justify-center items-center relative hidden lg:flex">
        <img
          src={illustration}
          alt="fincheck ilustração"
          className="object-cover w-full h-full max-w-[656px] max-h-[960px] rounded-[32px] select-none"
        />
        <div className="bg-white max-w-[656px] max-h-[960px] p-10 absolute bottom-0 rounded-b-[32px]">
          <img
            src={logoGreen}
            alt="fincheck logo"
            className="h-8 select-none"
          />
          <p className="text-gray-700 font-medium text-xl mt-6">
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
};
