import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  // let expenseContent = <p className="text-sky-500">NO EXPENSE FOUND</p>;
  if (props.items.length === 0) {
    return <p className="text-orange-500 font-semibold">NO EXPENSE FOUND</p>;
  }

  return (
    <ul>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
