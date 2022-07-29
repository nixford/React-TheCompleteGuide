import React, { useState } from 'react';

import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpsenses = (props) => {
  const [isHidden, showForm] = useState(false);

  const saveHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString()
    }
    props.onAdd(expenseData);
  }

  const showFormHandler = () => {
    showForm(true);
  }

  const hideFormHandler = () => {
    showForm(false);
  }


  return (
    <div className='new-expense'>
      {!isHidden && <button onClick={showFormHandler}>Add New Expense</button>}
      {isHidden && <ExpenseForm hideForm={hideFormHandler} onSave={saveHandler} />}
    </div>
  )
}

export default NewExpsenses;