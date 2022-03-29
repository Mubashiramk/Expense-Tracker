import React, { useState } from "react";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expenseContent = <p className="text-sky-500">NO EXPENSE FOUND</p>;

  // if (filteredExpenses.length > 0) {
  //   expenseContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       date={expense.date}
  //       title={expense.title}
  //       amount={expense.amount}
  //     />
  //   ));
  // }

  return (
    <Card className=" ">
      <div className="bg-black justify-center p-4 w-full md:px-[40px] md:py-[25px] rounded-2xl lg:w-[450px]">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <br />
        {/* {props.items.map((expense) => ( */}
        {/* {filteredExpenses.length === 0 && (
        <p className="text-sky-500">NO EXPENSE FOUND</p>
      )}

      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))} */}
        <ExpenseChart expenses={filteredExpenses} />
      </div>
      <br />
      <div className="lg:absolute lg:left-[600px] lg:bg-transparent lg:top-[120px] lg:w-[50%] bg-slate-100 rounded-2xl px-2 pt-1 pb-4 md:px-[30px] md:pt-[10px] md:py-[20px] lg:overflow-scroll lg:h-[80%]">
        <ExpenseList items={filteredExpenses} />
      </div>

      {/* {expenseContent} */}
      {/* <ExpenseItem
        date={props.item[0].date}
        title={props.item[0].title}
        amount={props.item[0].amount}
      />
      <br />
      <ExpenseItem
        date={props.item[1].date}
        title={props.item[1].title}
        amount={props.item[1].amount}
      />
      <br />
      <ExpenseItem
        date={props.item[2].date}
        title={props.item[2].title}
        amount={props.item[2].amount}
      /> */}
      <br />
    </Card>
  );
};
export default Expenses;
