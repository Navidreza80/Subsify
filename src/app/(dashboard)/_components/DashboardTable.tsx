import SearchIcon from "@/assets/images/icons/search.png";
import Image from "next/image";
import TableItem from "./TableItem";
import MoreIcon from "@/assets/images/icons/moreVertical.png";
import { Button } from "@/components/ui/button";

interface IProps {
  title: string;
  headerItems: string[];
  contentItems: {
    name: string;
    price: string;
    type: string;
    category: string;
    payment: string;
    status: string;
    renewalDate: string;
  }[];
}

const DashboardTable: React.FC<IProps> = ({
  title,
  contentItems,
  headerItems,
}) => {
  return (
    <div className="flex flex-wrap w-full">
      {/* Top controls */}
      <div className="flex-grow w-full flex flex-col sm:flex-row">
        {/* Title */}
        <span className="h-[57px] w-full sm:w-40 border-l border-t border-r border-secondary rounded-t-2xl sm:rounded-tl-2xl sm:rounded-tr-2xl flex items-center justify-center text-center sm:text-left">
          {title}
        </span>

        {/* Search + Buttons */}
        <div className="pb-2 sm:pb-[7px] pl-4 sm:pl-[7px] flex-1 gap-2 flex flex-wrap sm:flex-nowrap">
          <div className="relative flex-grow min-w-[180px] h-[50px] sm:h-auto">
            <input
              type="text"
              placeholder="Search..."
              className="h-full w-full px-[45px] rounded-2xl border border-secondary text-sm sm:text-base"
            />
            <Image
              className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6"
              src={SearchIcon}
              width={24}
              height={24}
              alt="Search Icon"
            />
          </div>

          <button className="flex-1 sm:flex-none sm:w-[162px] h-[50px] sm:h-full border rounded-2xl border-secondary text-sm sm:text-base">
            Filter
          </button>
          <button className="flex-1 sm:flex-none sm:w-[162px] h-[50px] sm:h-full border rounded-2xl border-secondary text-sm sm:text-base">
            Sort
          </button>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block flex-grow border border-secondary w-full rounded-2xl rounded-tl-none overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="h-[60px] text-primary font-semibold">
              {headerItems.map((item, index) => (
                <th
                  key={index}
                  className={`border-secondary px-2 py-1 ${
                    index === 0 && "w-[158.5px]"
                  } ${
                    index === 7 && "rounded-tr-2xl bg-secondary border-r-0"
                  } border-r`}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {contentItems.map((item, idx) => (
              <tr key={idx}>
                {Object.entries(item).map(([key, value]) => (
                  <TableItem key={key} itemKey={key} value={value} />
                ))}
                <TableItem
                  itemKey={"action"}
                  value={
                    <Image
                      className="m-auto cursor-pointer"
                      src={MoreIcon}
                      alt="MoreIcon"
                      width={6}
                      height={24}
                    />
                  }
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile/Tablet Cards */}
      <div className="grid gap-4 w-full md:hidden mt-4">
        {contentItems.map((item, idx) => (
          <div
            key={idx}
            className="border border-secondary rounded-2xl p-4 shadow-sm bg-background"
          >
            {Object.entries(item).map(([key, value]) => (
              <div key={key} className="flex justify-between py-1">
                <span className="font-semibold capitalize">{key}</span>
                <span>{value}</span>
              </div>
            ))}
            <div className="grid grid-cols-1 w-full mt-4 space-y-2">
              <Button variant="outline" className="border-red-600 text-red-500" >Delete</Button>
              <Button variant="outline" className="border-blue-600 text-blue-500" >Edit</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DashboardTable;
