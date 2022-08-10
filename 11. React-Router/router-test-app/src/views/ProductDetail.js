import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return <h1>Product Details About: {params.productName}</h1>;
};

export default ProductDetails;
