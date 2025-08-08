/* eslint-disable */

"use client";

export default function InputText({
  value,
  onChange,
  label,
  name,
  placeHolder,
  className,
  ...props
}: {
  name?: string;
  value?: string;
  placeHolder: string;
  label?: string;
  onChange?: any;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`text-fade font-medium text-[13px] absolute top-[-10] right-2 px-2`}
      >
        {label}
      </div>
      <input
        {...props}
        name={name}
        onChange={onChange}
        value={value}
        className={`w-full border border-border placeholder:text-text text-text h-[61px] px-[11px] rounded-2xl focus:outline-0 outline-0`}
        placeholder={placeHolder}
      ></input>
    </div>
  );
}
