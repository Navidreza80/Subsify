"use client";

/* eslint-disable */

// ShadCn components
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function InputSelect({
  items,
  label,
  className,
  onChange,
  value,
  defaultValue,
  name,
  ...props
}: {
  className?: string;
  items: any;
  onChange: (selectedValue: number | string) => void;
  label: string;
  value: number | string;
  defaultValue?: string;
  name?: string;
}) {
  // HandleChange
  const handleChange = (selectedValue: string) => {
    const found = items.find((item: string) => String(item) === selectedValue);
    if (onChange) {
      onChange(found ?? selectedValue);
    }
  };

  return (
    <Select
      {...props}
      name={name}
      {...(value !== undefined ? { value: String(value) } : { defaultValue })}
      defaultValue={defaultValue}
      onValueChange={handleChange}
    >
      <SelectTrigger
        className={`${className} !h-[61px] w-full cursor-pointer outline-0 focus:outline-0 z-[1000] text-fade relative rounded-2xl shadow-none !font-medium border-border border-secondary`}
      >
        <div
          className={`text-fade text-secondary font-medium  outline-0 focus:outline-0  absolute top-[-10] left-2 bg-background px-2`}
        >
          {label}
        </div>

        <SelectValue
          className="z-[100] relative outline-0 focus:outline-0"
          placeholder={"Select"}
        />
      </SelectTrigger>
      <SelectContent className="!p-0 !border-none rounded-[16px] bg-surface z-[100] font-medium relative ">
        {items?.map((item: string, index: string) => (
          <SelectItem
            key={index}
            value={String(item)}
            className=" z-[100] font-light relative text-text text-base"
          >
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
