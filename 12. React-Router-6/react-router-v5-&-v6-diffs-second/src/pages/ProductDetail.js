import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  // In v-6 "useNavigate" substitute useHistory in programmatic navigation
  const navigate = useNavigate();

  const params = useParams();
  console.log(params.productId);

  const navigateHandler = () => {
    // In v-6 the programmatic navigation is done like this:
    navigate("/welcome");
  };

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
      <br />
      <button onClick={navigateHandler}>Go to Welcome</button>
    </section>
  );
};

export default ProductDetail;
