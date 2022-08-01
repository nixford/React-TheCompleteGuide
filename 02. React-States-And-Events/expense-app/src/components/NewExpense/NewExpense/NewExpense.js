
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpsenses = (props) => {

  const saveHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString()
    }
    props.onAdd(expenseData);
  }


  return (
    <div className='new-expense'>
      <ExpenseForm onSave={saveHandler} /> {/* child -> parend comunication with data passing */}
    </div>
  )
}

export default NewExpsenses;