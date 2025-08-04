import SearchIcon from "@/assets/images/icons/search.png";
import Image from "next/image";
import TableItem from "./TableItem";
import MoreIcon from "@/assets/images/icons/moreVertical.png";

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
      <div className="h-[57px] flex-grow w-full flex">
        <span className="h-full w-40 border-l border-t border-r border-secondary rounded-tl-2xl rounded-tr-2xl flex items-center justify-center">
          {title}
        </span>
        <div className="pb-[7px] pl-[7px] flex-1 gap-2 flex">
          <div className="h-full flex-grow relative">
            <input
              type="text"
              placeholder="Search..."
              className="h-full w-full px-[55px] rounded-2xl border border-secondary"
            />
            <Image
              className="absolute left-[13px] top-2 w-8 h-8 focus:outline-secondary focus:ring-secondary focus:border-secondary"
              src={SearchIcon}
              alt="Search Icon"
            />
          </div>

          <button className="w-[162px] h-full border rounded-2xl border-secondary">
            Filter
          </button>
          <button className="w-[162px] h-full border rounded-2xl border-secondary">
            Sort
          </button>
        </div>
      </div>
      <div className="flex-grow border border-secondary w-full rounded-tl-none rounded-2xl">
        <table className="w-full h-full">
          <thead>
            <tr className="h-[60px] text-primary font-semibold">
              {headerItems.map((item, index) => (
                <th
                  key={index}
                  className={`border-b border-secondary ${
                    index == 0 && "w-[158.5px]"
                  } ${
                    index == 7 && "rounded-tr-2xl bg-secondary border-r-0"
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
    </div>
  );
};
export default DashboardTable;
