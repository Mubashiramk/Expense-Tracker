import React from "react";

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="w-full  flex flex-row  justify-between">
      <div>
        <h2 className="text-white text-lg font-semibold md:text-xl">
          Analytics
        </h2>
      </div>
      <div className="bg-amber-600 w-[110px] rounded-xl pt-[3px] pb-[2px]">
        <label className="font-semibold">Year </label>
        <select
          value={props.selected}
          onChange={dropdownChangeHandler}
          className="w-[60px] bg-amber-600 text-sm font-semibold cursor-pointer border-0   focus:outline-none"
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
