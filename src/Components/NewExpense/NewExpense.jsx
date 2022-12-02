import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [clicked, setClicked] = useState(false);
  const onSaveExpenseData = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.onSubmit(expenseData);
  };
  const clickHandler = () => {
    setClicked(!clicked);
  };
  let form = <button onClick={clickHandler}>Add new Expense</button>;
  if (clicked) {
    form = (
      <ExpenseForm onSubmit={onSaveExpenseData} clickHandler={clickHandler} />
    );
  }
  return <div className="new-expense">{form}</div>;
}

export default NewExpense;
