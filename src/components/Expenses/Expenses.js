import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  // you can derive or compute values with and "let" element, so we not create another
  // useState that depends of the previous useState.
  // For example if we want to add a text saying that the information for x year is hidde,
  // we can do it with let
  //
  // let filterInfoText = "2020, 2021, 2022 & 2023"
  // ...
  // if (filteredYear === "2019") {
  //   filterInfoText = "2020, 2021, 2022 & 2023"
  // } else if (filteredYear === "2020") {
  //   filterInfoText = "2019, 2021, 2022 & 2023"
  // }  else if (filteredYear === "2021") {
  //   filterInfoText = "2019, 2020, 2022 & 2023"
  // } else if (filteredYear === "2022") {
  //   filterInfoText = "2019, 2020, 2021 & 2023"
  // } else {
  //   filterInfoText = "2019, 2020, 2021 & 2022"
  // }
  // ...
  // then just add the var filterInfoText in our jsx, like this:
  // <p>The information for the years {filterInfoText} is hidden</p>

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
