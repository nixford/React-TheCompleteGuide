import './ExpenseItemProps.css';

// All passed props from the parent are received in 'props' argument 
// In case of many props send from the parent - all can be accessed by props such as props.title, props.date, props.amount
function ExpenseItem(props) {
	const month = props.data.date.toLocaleString('en-US', { month: 'long' });
	const day = props.data.date.toLocaleString('en-US', { day: '2-digit' });
	const year = props.data.date.getFullYear();

	return (
		<div className='expense-item'>
			<div>{month}</div>
			<div>{day} </div>
			<div>{year}</div>
			<div className='expense-item__description'>
				<h2>{props.data.title}</h2>
				<div className='expense-item__price'>{props.data.amount}</div>
			</div>
		</div>
	)
}

export default ExpenseItem;