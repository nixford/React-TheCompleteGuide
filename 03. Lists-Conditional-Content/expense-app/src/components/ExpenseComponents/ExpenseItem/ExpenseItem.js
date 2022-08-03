import React, { useState } from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';
import './ExpenseItem.css';

// All passed props from the parent are received in 'props' argument 
// In case of many props send from the parent - all can be accessed by props such as props.title, props.date, props.amount
function ExpenseItem(props) {

	// The function must be called inside the components (there is exception) function in order the data to be reactive
	// needs default state -> props.data.title
	// always returns array with two values: 1) is the updated value, 2) function for updating the value
	// const [title, setTitle] = useState(props.data.title);


	// const clickHandler = () => {
	// 	setTitle('Updated');
	// }

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.data.date} />
			<div className='expense-item__description'>
				<h2>{props.data.title}</h2>
				<div className='expense-item__price'>{props.data.amount}</div>
			</div>
			{/* <button onClick={clickHandler}>Change title</button> */}
		</Card>
	)
}

export default ExpenseItem;