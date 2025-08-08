"use client";

import cancell from "@/assets/images/icons/cancell.png";
import {
  default as pending,
  default as verified,
} from "@/assets/images/icons/verified.png";
import { Button } from "@/components/common/Button";
import { Calendar22 } from "@/components/ui/date-picker";
import { useFormik } from "formik";
import { useState } from "react";
import DashboardTable from "../../_components/DashboardTable";
import Header from "../../_components/Header";
import InputSelect from "../../_components/SelectInput";
import StatusCard from "../../_components/StatusCard";

const items = [
  {
    name: "name",
    price: "price",
    type: "type",
    category: "category",
    payment: "payment",
    status: "status",
    renewalDate: "renewal date",
  },
  {
    name: "name",
    price: "price",
    type: "type",
    category: "category",
    payment: "payment",
    status: "status",
    renewalDate: "renewal date",
  },

  {
    name: "name",
    price: "price",
    type: "type",
    category: "category",
    payment: "payment",
    status: "status",
    renewalDate: "renewal date",
  },
  {
    name: "name",
    price: "price",
    type: "type",
    category: "category",
    payment: "payment",
    status: "status",
    renewalDate: "renewal date",
  },

  {
    name: "name",
    price: "price",
    type: "type",
    category: "category",
    payment: "payment",
    status: "status",
    renewalDate: "renewal date",
  },
  {
    name: "name",
    price: "price",
    type: "type",
    category: "category",
    payment: "payment",
    status: "status",
    renewalDate: "renewal date",
  },
];

const StatusItems = [
  {
    src: verified.src,
    title: "Active Subscriptions",
    value: "12",
    totalValue: "200",
    currency: "USD",
  },
  {
    src: cancell.src,
    title: "Cancelled Subscriptions",
    value: "6",
    totalValue: "200",
    currency: "USD",
  },
  {
    src: pending.src,
    title: "Pending Subscriptions",
    value: "9",
    totalValue: "200",
    currency: "USD",
  },
];

const Subscriptions = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const form = useFormik({
    initialValues: {
      name: "",
      price: "",
      currency: "USD",
      frequency: "",
      category: "",
      startDate: "",
      paymentMethod: "",
    },
    onSubmit: (values) => console.log(values),
  });

  const InputItems = [
    {
      label: "name",
      value: form.values.name,
      items: [
        "Spotify - Premium Individual",
        "Netflix - Premium",
        "Notion - Plus",
        "YouTube - YouTube Premium",
        "Adobe Creative Cloud - All Apps",
        "ChatGPT - ChatGPT Plus",
        "Figma - Professional",
        "Todoist - Pro",
        "Grammarly - Premium",
        "Canva - Pro",
      ],
      name: "name",
    },
    {
      label: "frequency",
      value: form.values.frequency,
      items: ["daily", "weekly", "monthly", "yearly"],
      name: "frequency",
    },
    {
      label: "method",
      value: form.values.paymentMethod,
      items: ["Credit Card", "PayPal", "Bank Transfer"],
      name: "paymentMethod",
    },
  ];
  return (
    <>
      <Header />
      <div className="flex md:gap-y-6 gap-y-4 items-start py-6 w-full flex-wrap">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-x-6 w-full gap-y-4">
          {StatusItems.map((item, index) => (
            <StatusCard key={index} {...item} />
          ))}
        </div>
        <form
          onSubmit={form.handleSubmit}
          className="w-full grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-6 gap-4"
        >
          {InputItems.map((item, index) => (
            <InputSelect
              name={item.name}
              key={index}
              label={item.label}
              onChange={form.handleChange}
              value={item.value}
              items={item.items}
            />
          ))}

          <Calendar22
            open={open}
            setOpen={setOpen}
            date={date}
            setDate={setDate}
            trigger={
              <div className="h-[61px] w-full relative rounded-2xl  border border-secondary flex items-center px-3">
                <div
                  className={`text-fade text-secondary absolute top-[-10] left-2 bg-background px-3 text-[14px]"`}
                >
                  start date
                </div>
                {date ? (
                  date.toLocaleDateString()
                ) : (
                  <p className="cursor-pointer text-[14px] font-medium">
                    Select date
                  </p>
                )}
              </div>
            }
          />
          <Button className="md:hidden lg:block hidden" type="submit">
            Add Subscription
          </Button>
        </form>
        <Button className="flex-1 md:block lg:hidden block" type="submit">
          Add Subscription
        </Button>
        <DashboardTable
          title="Subscriptions"
          contentItems={items}
          headerItems={[
            "name",
            "price",
            "type",
            "category",
            "payment",
            "status",
            "renewal date",
            "",
          ]}
        />
      </div>
    </>
  );
};
export default Subscriptions;
