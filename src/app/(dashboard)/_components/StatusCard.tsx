/* eslint-disable */

import Image from "next/image";

const StatusCard = ({
  src,
  title,
  value,
  totalValue,
  currency,
}: {
  src: any;
  title: string;
  value: string;
  totalValue: string;
  currency: string;
}) => {
  return (
    <div className="w-full border border-secondary rounded-2xl px-[10px] flex items-center h-[76px] gap-x-4">
      <p className="rounded-full border border-primary w-[57px] aspect-square flex items-center justify-center">
        <Image src={src} alt="icon" width={29} height={29} />
      </p>
      <div className="flex flex-col">
        <p className="flex items-center gap-1">
          {title} <span className="text-primary">{value}</span>
        </p>
        <p className="flex items-center gap-1 text-[13px] text-secondary">
          total value:{" "}
          <span className="text-primary">
            {totalValue} {currency}
          </span>
        </p>
      </div>
    </div>
  );
};
export default StatusCard;
