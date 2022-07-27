// import ExpenseItem from './components/ExpenseComponents/ExpenseItemInitial/ExpenseItem';
import Expenses from './components/ExpenseComponents/Expenses/Expenses';

const expenses = [
  { date: new Date(2021, 8, 8), title: "Expense ratio", amount: 294.67 },
  { date: new Date(2021, 9, 9), title: "Earnings", amount: 394.67 },
  { date: new Date(2021, 10, 10), title: "Book value", amount: 494.67 },
]

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      {/* <ExpenseItem /> */}
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
