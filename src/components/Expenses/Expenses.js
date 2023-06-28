import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaultYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={props.elements[0].title}
          amount={props.elements[0].amount}
          date={props.elements[0].date}
        />
        <ExpenseItem
          title={props.elements[1].title}
          amount={props.elements[1].amount}
          date={props.elements[1].date}
        />
        <ExpenseItem
          title={props.elements[2].title}
          amount={props.elements[2].amount}
          date={props.elements[2].date}
        />
        <ExpenseItem
          title={props.elements[3].title}
          amount={props.elements[3].amount}
          date={props.elements[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
