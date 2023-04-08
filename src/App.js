import React, { useState, useEffect } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";
let DUMMY_EXPENSES = [
  {
    id: 101,
    date: new Date(2023, 3, 25),
    title: "School Fees",
    amount: 250,
  },
  {
    id: 102,
    date: new Date(2023, 3, 24),
    title: "Dinner",
    amount: 50,
  },
  {
    id: 103,
    date: new Date(2023, 3, 12),
    title: "Bike Insurance",
    amount: 200,
  },
  {
    id: 104,
    date: new Date(2023, 3, 3),
    title: "Grosary",
    amount: 70,
  },
  {
    id: 105,
    date: new Date(2023, 3, 1),
    title: "House Rent",
    amount: 120,
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  function getAllExpenses() {
    fetch('https://localhost:7153/api/ExpenseManager/getAllExpenses').then(
      response => {
        return response.json()
      }
    ).then(data => {
      setExpenses(data);
    });
  }
  useEffect(() => {
    getAllExpenses();
  }, []);


  const addNewExpenseDataHandler = (newExpense) => {
    fetch("https://localhost:7153/api/ExpenseManager/addnewexpense", {
      method: 'POST',
      body: JSON.stringify(newExpense),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      getAllExpenses();
    });
  };

  return (
    <div>
      <NewExpense onAddExpenseData={addNewExpenseDataHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
