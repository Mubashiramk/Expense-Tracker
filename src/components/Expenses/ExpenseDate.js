function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "short" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="h-auto rounded-2xl p-1 text-center w-auto text-black bg-yellow-100 md:w-[90px]">
      <div className="text-[30px] font-semibold md:text-[32px]">{day}</div>
      <div className="text-[10px] font-medium md:text-[12px]">
        {month},{year}
      </div>
    </div>
  );
}

export default ExpenseDate;
