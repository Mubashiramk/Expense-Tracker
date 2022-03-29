import { Input } from "postcss";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    //console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler} className="text-left items-center">
      <div className="relative h-[auto] md:py-[20px] md:px-[40px]">
        <div className="flex justify-between flex-row mb-[10px] h-[40px] w-full  ">
          <label className="text-white font-medium text-lg ">Date</label>
          <input
            type="date"
            min="2019-01-01"
            className=" rounded-lg h-[35px] w-[180px] md:w-[280px] lg:w-[230px] "
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>

        <div className="flex flex-row justify-between w-full h-[40px] mb-[10px]">
          <label className="text-white font-medium text-lg ">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            className="w-[180px] rounded-lg h-[35px] md:w-[280px] lg:w-[230px]"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className=" flex flex-row justify-between w-full h-[40px] w-full mb-[20px]">
          <label className="text-white font-medium text-lg ">Title</label>
          <input
            type="text"
            className="w-[180px] rounded-lg h-[35px] md:w-[280px] lg:w-[230px]"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>

        <div className="   w-full m-auto text-center">
          <button
            type="submit"
            className=" h-[40px] rounded-lg  text-lg font-medium  text-center justify-center w-[150px] bg-amber-600 text-white"
          >
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
