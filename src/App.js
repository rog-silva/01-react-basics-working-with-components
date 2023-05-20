// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2023, 4, 18) },
    { title: "Toilet Paper", amount: 94.12, date: new Date(2021, 2, 14) },
    { title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    { title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses elements={expenses} />
    </div>
  );
}

export default App;
