// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenseInput/NewExpense";

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2023, 4, 18) },
    { title: "Toilet Paper", amount: 94.12, date: new Date(2021, 2, 14) },
    { title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    { title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses elements={expenses} />
    </div>
  );
};

export default App;
