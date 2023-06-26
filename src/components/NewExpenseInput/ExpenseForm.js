import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // useState is a string because by default you listen to the change event for an input
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // you can have more than one State per component but exist an alternative
  // but the diference is you have to update the 3 useStates, not just 1, but is more often the single useState

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(event.target.value);
    // This is not the convention for setUserInput
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })
    // setUserInput(event.target.value);
    // console.log(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, eventTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, eventAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, eventDate: event.target.value };
    // });
  };

  const submitHander = (event) => {
    event.preventDefault();

    const expenseData = {
      titel: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHander}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
