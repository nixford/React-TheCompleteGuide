import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../../UI/Card/Card';
import './Expenses.css';

function Expenses(props) {
	return (
		<Card className='expenses'>
			<ExpenseItem data={props.expenses[0]} /> {/* passing props to child component */}
			<ExpenseItem data={props.expenses[1]} />
			<ExpenseItem data={props.expenses[2]} />
		</Card>
	)
}

export default Expenses;