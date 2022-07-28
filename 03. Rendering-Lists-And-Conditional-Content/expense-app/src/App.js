import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense/NewExpense';
import Expenses from './components/ExpenseComponents/Expenses/Expenses/Expenses';


const INITIAL_EXPENSES = [
  { id: 'e1', title: "Expense ratio", amount: 294.67, date: new Date(2021, 8, 8) },
]

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  // The default argument (prevExp), which can be received from the state function (in this case "setExpenses") should be used
  // The setExpenses([expense, ...expenses]) is not correct
  // The correct syntax is the following:
  const addExpenseHandler = (exp) => {
    setExpenses((prevExp) => {
      return [exp, ...prevExp]
    })
  }

  return (
    <div>
      <NewExpense onAdd={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
