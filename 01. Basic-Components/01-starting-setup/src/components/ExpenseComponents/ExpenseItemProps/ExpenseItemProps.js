import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';
import './ExpenseItemProps.css';

// All passed props from the parent are received in 'props' argument 
// In case of many props send from the parent - all can be accessed by props such as props.title, props.date, props.amount
function ExpenseItem(props) {

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.data.date} />
			<div className='expense-item__description'>
				<h2>{props.data.title}</h2>
				<div className='expense-item__price'>{props.data.amount}</div>
			</div>
		</Card>
	)
}

export default ExpenseItem;