import Card from "../../UI/Card/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        description,
      })
    );
  };

  // Async code example in the component:

  // const addToCartHandler = async () => {

  // POST - Http request to update data in database
  //  const response = await fetch(
  //   "https://foodapp-13bc4-default-rtdb.europe-west1.firebasedatabase.app/items.json",
  //   {
  //     method: "POST",
  //     body: JSON.stringify({ .... }),
  //   }
  // );
  // if (!response.ok) {
  //   throw new Error("Something went wrong!");
  // }

  // GET - Http request to fetch data
  // const response = await fetch(
  //   "https://foodapp-13bc4-default-rtdb.europe-west1.firebasedatabase.app/items.json"
  // );
  // if (!response.ok) {
  //   throw new Error("Something went wrong!");
  // }
  // const responseData = await response.json();

  // UPDATE the state (items in store)
  // dispatch(
  //   cartActions.updateItems({items: items})
  // );
  // };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
