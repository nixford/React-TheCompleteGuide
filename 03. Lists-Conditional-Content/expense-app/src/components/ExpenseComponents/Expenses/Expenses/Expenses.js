import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from '../ExpensesList/ExpensesList';
import Card from '../../../UI/Card/Card';
import ExpensesChart from '../../ExpensesChart/ExpensesChart';
import './Expenses.css';

function Expenses(props) {
	const [year, setYear] = useState('2020');

	const selectYearHandler = (data) => {
		setYear(data);
	}

	const filteredExp = props.expenses.filter((e) => e.date.getFullYear().toString() === year);

	// Third option for conditional rendering:
	// let expContent = <p className='white'>No expenses found.</p>
	// if (props.expenses.length > 0) {
	// 	expContent = props.expenses.map((expense) => <ExpenseItem key={expense.id} data={expense} />)
	// }

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selectedYear={year} onSelect={selectYearHandler} />
				<ExpensesChart expenses={filteredExp} />
				<ExpensesList expenses={filteredExp} />

				{/* Making list in React and passing props to child component */}
				{/* {filteredExp.map((expense) => <ExpenseItem key={expense.id} data={expense} />)} */}

				{/* OPTIONS for Consitional rendering examples in React */}
				{/* {filteredExp.length === 0 ? <p className='white'>No expenses found.</p> :
					filteredExp.map((expense) => <ExpenseItem key={expense.id} data={expense} />)} */}
				{/* {filteredExp.length === 0 && <p className='white'>No expenses found.</p>}
				{filteredExp.length > 0 && filteredExp.map((expense) => <ExpenseItem key={expense.id} data={expense} />)} */}

			</Card>
		</div>

	)
}

export default Expenses;