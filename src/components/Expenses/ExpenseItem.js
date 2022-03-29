import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("carwash");
  //   console.log("hi bu!!!");
  // };
  return (
    <li>
      <Card className=" h-aut0  mt-4 items-center flex bg-white lg:bg-slate-300  md:px-[15px] md:py-1">
        <ExpenseDate date={props.date} />
        <div className=" flex flex-row justify-between items-center w-full">
          <div className="w-full p-2 ">
            <h1 className=" text-black text-lg font-medium text-center font-['Roboto', sans-serif] md:font-semibold md:text-2xl  ">
              {props.title}
            </h1>
          </div>
          <div className=" h-[80px] rounded-lg py-7 font-['Roboto', sans-serif] text-xl font-semibold  text-center justify-center w-[50%] text-orange-700 md:text-2xl">
            ${props.amount}
          </div>
        </div>
        {/* <button onClick={clickHandler}>click</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
