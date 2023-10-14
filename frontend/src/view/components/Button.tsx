import { ComponentProps } from "react";

interface IButton extends ComponentProps<"button"> {}

export const Button = (props: IButton) => {
  return (
    <button
      {...props}
      className="bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 disabled:cursor-not-allowed px-6 h-12 font-medium text-white rounded-2xl transition-all "
    ></button>
  );
};
