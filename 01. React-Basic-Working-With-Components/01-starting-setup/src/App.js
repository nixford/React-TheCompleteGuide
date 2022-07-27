import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import ExpenseItemProps from './components/ExpenseItemProps/ExpenseItemProps';

const expenses = [
  { date: new Date(2021, 8, 8), title: "Expense ratio", amount: 294.67 },
  { date: new Date(2021, 8, 9), title: "Earnings", amount: 394.67 },
  { date: new Date(2021, 8, 10), title: "Book value", amount: 494.67 },
]


function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>Text paragraph</p>
      <ExpenseItem />
      <ExpenseItemProps data={expenses[0]} /> {/* passing props to child component */}
      <ExpenseItemProps data={expenses[1]} /> {/* passing props to child component */}
      <ExpenseItemProps data={expenses[2]} /> {/* passing props to child component */}
    </div>
  );
}

export default App;
