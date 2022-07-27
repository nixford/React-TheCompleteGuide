import './Card.css'

function Card(props) {
	const classes = 'card ' + props.className; // In order the Card component to be able to receive className
	return (
		<div className={classes}>{props.children}</div> // In order the two tag components of Card to receive content between the two tags
	)
}

export default Card;