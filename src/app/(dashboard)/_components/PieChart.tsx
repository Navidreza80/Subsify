"use client";
import { Button } from "@/components/common/Button";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const PieChart = () => {
  const [mounted, setMounted] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (chartRef.current) {
      gsap.fromTo(
        chartRef.current,
        { scale: 0.85, opacity: 0, filter: "blur(12px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
        }
      );
    }
    if (controlsRef.current) {
      gsap.fromTo(
        controlsRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          delay: 0.3,
          ease: "power2.out",
        }
      );
    }
  }, [mounted]);

  const series = [44, 55, 13, 43];
  const options = {
    chart: {
      type: "donut" as const,
      animations: { enabled: true, easing: "easeinout", speed: 800 },
    },
    labels: ["Apple", "Mango", "Orange", "Banana"],
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: ["#ff6000", "#813c00", "#ffb347", "#ffd580"],
    stroke: { show: false },
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
          labels: { show: false },
        },
      },
    },
  };

  if (!mounted)
    return (
      <div className="w-full sm:w-[48%] h-[268px] flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div
      className="
        w-full sm:w-[48%] lg:w-[49.7%]
        px-4 sm:px-[34px]
        border rounded-2xl border-secondary
        flex flex-col lg:flex-row
        items-center lg:items-center justify-between
        gap-6 lg:gap-0
        py-6 lg:py-0
      "
    >
      {/* Chart */}
      <div ref={chartRef} className="flex-shrink-0">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={200}
          height={200}
        />
      </div>

      {/* Controls */}
      <div
        ref={controlsRef}
        className="w-full lg:w-[45.9%] flex justify-center gap-[19px] flex-col"
      >
        <div className="relative w-full">
          <label
            className="text-sm text-secondary font-medium absolute left-4 -top-2.5 px-1 bg-background"
            htmlFor="status-select"
          >
            Status
          </label>
          <select
            id="status-select"
            className="w-full py-[14px] px-[20px] rounded-2xl border border-secondary text-secondary appearance-none"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="expired">Expired</option>
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                d="M7 10l5 5 5-5"
                stroke="#813c00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <Button className="w-full mt-2">Create Subscription</Button>
      </div>
    </div>
  );
};
export default PieChart;
