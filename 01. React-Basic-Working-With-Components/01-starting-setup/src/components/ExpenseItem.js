import './ExpenseItem.css';

// Every React component is function which should be exported/imported 
function ExpenseItem() {
	return (
		// In the HTML part the component must have always only one root element!!!
		<div className='expense-item'> {/* react class binding syntax - 'className' */}
			<div>Date</div>
			<div className='expense-item__description'>
				<h2>Title</h2>
				<div className='expense-item__price'>Amount</div>
			</div>
		</div>
	)
}

export default ExpenseItem;