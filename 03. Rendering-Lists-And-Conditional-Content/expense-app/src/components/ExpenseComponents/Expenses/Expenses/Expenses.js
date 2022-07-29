import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpenseItem from '../../ExpenseItem/ExpenseItem';
import Card from '../../../UI/Card/Card';
import './Expenses.css';

function Expenses(props) {
	const [year, setYear] = useState('2020');

	const selectYearHandler = (data) => {
		setYear(data);
	}

	const filteredExp = props.expenses.filter((e) => e.date.getFullYear().toString() === year);

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selectedYear={year} onSelect={selectYearHandler} />
				{/* Making list in React and passing props to child component */}
				{filteredExp.length === 0 ? <p className='white'>No expenses found.</p> :
					filteredExp.map((expense) => <ExpenseItem key={expense.id} data={expense} />)}
			</Card>
		</div>

	)
}

export default Expenses;