import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpenseItem from '../../ExpenseItem/ExpenseItem';
import Card from '../../../UI/Card/Card';
import './Expenses.css';

function Expenses(props) {
	const [year, setYear] = useState('2020');

	const selectYearHandler = (data) => {
		setYear(data);
		console.log(data)
	}

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selectedYear={year} onSelect={selectYearHandler} />
				{/* Making list in React and passing props to child component */}
				{props.expenses.map((expense) => <ExpenseItem data={expense} />)}
			</Card>
		</div>

	)
}

export default Expenses;