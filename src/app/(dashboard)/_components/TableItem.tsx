const TableItem = ({
  value,
  itemKey,
}: {
  value: string | React.ReactNode;
  itemKey: string;
}) => {
  return (
    <td
      className={`border-b text-center border-secondary px-[23px] py-[27px] ${
        itemKey == "action" && "border-r-0"
      } border-r`}
    >
      <span className="m-auto">{value}</span>
    </td>
  );
};
export default TableItem;
