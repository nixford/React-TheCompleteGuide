import ExpenseItemProps from '../ExpenseItemProps/ExpenseItemProps';

function Expenses(props) {
	return (
		<div>
			<ExpenseItemProps data={props.expenses[0]} /> {/* passing props to child component */}
			<ExpenseItemProps data={props.expenses[1]} />
			<ExpenseItemProps data={props.expenses[2]} />
		</div>
	)
}

export default Expenses;