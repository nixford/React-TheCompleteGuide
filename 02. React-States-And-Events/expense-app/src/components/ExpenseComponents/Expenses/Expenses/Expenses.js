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
				<ExpenseItem data={props.expenses[0]} /> {/* passing props to child component */}
				<ExpenseItem data={props.expenses[1]} />
				<ExpenseItem data={props.expenses[2]} />
			</Card>
		</div>

	)
}

export default Expenses;