import React from "react";

const Header = () => {
  return (
    <div>
      <div className="w-auto lg:py-[20px]  top-4">
        <h1 className="text-2xl  font-bold font-['Roboto', sans-serif]  opacity-100 top-[0px] lg:text-4xl ">
          Expense Tracker
        </h1>
      </div>
      <div className="relative h-[200px] w-full bg-[url('./Images/expense-ratio-vector-2.png')] lg:bg-none bg-cover bg-center opacity-50 lg:hidden"></div>
    </div>
  );
};
export default Header;
