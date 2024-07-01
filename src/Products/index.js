import "../index.css";
import ProductCard from "../Atoms/ProductCard/index.js";
import { useGetProduct } from "./hooks/useGetProduct.js";

const Product = () => {
  const { product, error, loading } = useGetProduct();
  console.log({ product });

  return (
    <div>
      <h1 className="header">Products</h1>
    <div className="details">
      {loading && <h2>Loading product ...</h2>}
      {error.length > 0 && <h2>{error}</h2>}
      {product.length > 0
        ? product.map((prod) => (
          
            <ProductCard
              key={prod.id}
              image={prod.image}
              title={`${prod.title}`}
              price={`${prod.price}`}
              category={`${prod.category}`} />          
          ))
        : !loading && <h2>No product found</h2>}
    </div>
    </div>
  );
};

export default Product;
