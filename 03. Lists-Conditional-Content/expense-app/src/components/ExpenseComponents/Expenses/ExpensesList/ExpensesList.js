import ExpenseItem from "../../ExpenseItem/ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {

  // Forth option for conditional rendering:
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return (
    <li className="expenses-list">
      {props.expenses.map((expense) =>
        <ExpenseItem key={expense.id} data={expense} />)}
    </li>
  )

}

export default ExpensesList;