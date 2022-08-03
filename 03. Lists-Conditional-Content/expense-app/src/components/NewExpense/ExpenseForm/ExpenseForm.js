import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

  // FIRST OPTION - MULTIPLE STATES

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };


  // SECOND OPTION - ONE STATE

  // const [userInput, setUserInput] = useState({ title: '', amount: '', setDate: '' });

  // const titleChangeHandler = (e) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, title: e.target.value }
  //   })
  //   console.log('userInput-Title: ', userInput);
  // };

  // const amountChangeHandler = (e) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, amount: e.target.value }
  //   })
  //   console.log('userInput-Amount: ', userInput);
  // };

  // const dateChangeHandler = (e) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, date: e.target.value }
  //   })
  //   console.log('userInput-Date: ', userInput);
  // };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseDate = {
      title: title,
      amount: +amount,
      date: new Date(date),
    }

    props.onSave(expenseDate) // child -> parend comunication with data passing

    setTitle('');
    setAmount('');
    setDate('');
  };

  // Two way binding with -> value={title} - the same such as v-model in Vue.js
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={amount} onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2020-12-31' value={date} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.hideForm}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>)
}

export default ExpenseForm;