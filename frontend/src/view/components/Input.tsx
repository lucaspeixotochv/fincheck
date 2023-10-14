import { ComponentProps } from "react";

interface IInput extends ComponentProps<"input"> {
  name: string;
}

export const Input = ({ placeholder, name, id, ...props }: IInput) => {
  const inputId = id ?? name;
  return (
    <div className="relative">
      <input
        {...props}
        name={name}
        id={inputId}
        className="bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 peer pt-4 outline-none placeholder-shown:pt-0 focus:border-gray-800 transition-all"
        placeholder=" "
      />
      <label
        // className="absolute left-[13px]   pointer-events-none text-gray-700"
        className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 transition-all"
        htmlFor={inputId}
      >
        {placeholder}
      </label>
    </div>
  );
};
