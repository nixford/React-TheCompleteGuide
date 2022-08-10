import { useParams, useHistory } from "react-router-dom";

const ProductDetails = () => {
  const history = useHistory();
  const params = useParams();

  const doneHandler = () => {
    history.push("/welkome");
  };

  return (
    <section>
      <h1>Product Details About: {params.productName}</h1>
      <br />
      <form>
        <div>
          <labe>Author</labe>
          <input type="text" id="author" />
        </div>
        <br />
        <button onClick={doneHandler}>Enter-programatic-navigation</button>
      </form>
    </section>
  );
};

export default ProductDetails;
