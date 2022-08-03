import ExpenseItemProps from '../ExpenseItemProps/ExpenseItemProps';
import Card from '../../UI/Card/Card';
import './Expenses.css';

function Expenses(props) {
	return (
		<Card className='expenses'>
			<ExpenseItemProps data={props.expenses[0]} /> {/* passing props to child component */}
			<ExpenseItemProps data={props.expenses[1]} />
			<ExpenseItemProps data={props.expenses[2]} />
		</Card>
	)
}

export default Expenses;