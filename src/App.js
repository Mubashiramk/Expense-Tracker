import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/AddExpense/NewExpense";
import Header from "./Header";

const dummyExpense = [
  {
    id: "e1",
    date: new Date(2022, 1, 20),
    title: "bike insurance",
    amount: 333.99,
  },
  {
    id: "e2",
    date: new Date(2022, 2, 23),
    title: "car insurance",
    amount: 345.99,
  },
  {
    id: "e3",
    date: new Date(2022, 2, 19),
    title: "outing",
    amount: 225.99,
  },
];

function App() {
  const [expense, setExpense] = useState(dummyExpense);

  const addExpenseHandler = (expense) => {
    // console.log("mubae");
    // console.log(expense);
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div className="lg:relative text-center p-[4%] m-auto pt-[35px]  md:items-center md:justify-center md:w-[600px]  lg:h-[full] lg:w-full lg:bg-[url('./Images/desktop1.png')] lg:bg-contain lg:items-left lg:justify-left lg:px-[8%]">
      <Header />
      <Expenses items={expense} />
      <NewExpense onAddExpense={addExpenseHandler} />
    </div>
  );
}

export default App;
