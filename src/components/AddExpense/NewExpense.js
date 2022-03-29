import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="bg-black rounded-lg p-4 lg:w-[450px]">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
