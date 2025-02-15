import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  // console.log("Expenses", expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [ ...prevExpenses,expense];
    });
  };

  // const filterExpenseHandler = (value) => {

  //   let newArray = expenses.filter((element) => {
  //     const tempYear = element.date.getFullYear();
  //     return tempYear == value;

  //   });
  //   //console.log('NEW ARRAY:', newArray);
  //   //console.log("I am inside App.js value=", value);
  //   setExpenses(newArray);
  // };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense addExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
