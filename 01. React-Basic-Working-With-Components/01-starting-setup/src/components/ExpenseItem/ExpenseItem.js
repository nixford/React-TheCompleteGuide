import './ExpenseItem.css';

// Every React component is function which should be exported/imported 
function ExpenseItem() {
	const date = new Date(2021, 8, 8);
	const title = "Cargo fees";
	const amount = 294.67;


	return (
		// In the HTML part the component must have always only one root element!!!
		<div className='expense-item'> {/* react class binding syntax - 'className' */}
			<div>{date.toISOString()}</div> {/* the date object must be cast to string */}
			<div className='expense-item__description'>
				<h2>{title}</h2>{/* react dynamic output syntax - {variable} */}
				<div className='expense-item__price'>{amount}</div>
			</div>
		</div>
	)
}

export default ExpenseItem;